console.log("Author Seeder Loaded");

function isAuthorRole(roleValue) {
  const role = (roleValue || "").toLowerCase();
  return (
    role.includes("original creator") ||
    role.includes("original author") ||
    role.includes("creator") ||
    role.includes("author") ||
    role.includes("manga")
  );
}

function collectAniListAuthors(animeList) {
  const byAniListId = new Map();

  for (const anime of animeList) {
    for (const edge of anime.staff?.edges || []) {
      const staff = edge.node;
      if (!staff?.id || !staff?.name?.full) {
        continue;
      }
      if (!isAuthorRole(edge.role)) {
        continue;
      }
      if (!byAniListId.has(staff.id)) {
        byAniListId.set(staff.id, {
          aniListId: staff.id,
          name: staff.name.full,
          bio: staff.description || null,
        });
      }
    }
  }

  return byAniListId;
}

async function seedAuthors(prisma, users, animeList) {
  const adminUser = users.find((user) => user.email === "demo1@anime.local");
  const memberUser = users.find((user) => user.email === "demo2@anime.local");

  if (!adminUser) {
    throw new Error("Admin seed user demo1@anime.local was not found.");
  }
  if (!memberUser) {
    throw new Error("Member seed user demo2@anime.local was not found.");
  }

  const collected = collectAniListAuthors(animeList);
  const adminAuthors = [];
  const adminAuthorsByAniListId = {};

  for (const authorData of collected.values()) {
    const author = await prisma.animeAuthor.upsert({
      where: {
        userId_name: {
          userId: adminUser.id,
          name: authorData.name,
        },
      },
      update: {
        bio: authorData.bio,
      },
      create: {
        userId: adminUser.id,
        name: authorData.name,
        bio: authorData.bio,
      },
    });

    adminAuthors.push(author);
    adminAuthorsByAniListId[String(authorData.aniListId)] = author;
  }

  const memberAuthor = await prisma.animeAuthor.upsert({
    where: {
      userId_name: {
        userId: memberUser.id,
        name: "Member Author 001",
      },
    },
    update: {
      bio: "Member-owned sample author.",
    },
    create: {
      userId: memberUser.id,
      name: "Member Author 001",
      bio: "Member-owned sample author.",
    },
  });

  return {
    byUserEmail: {
      [adminUser.email]: adminAuthors,
      [memberUser.email]: [memberAuthor],
    },
    adminAuthorsByAniListId,
  };
}

module.exports = {
  seedAuthors,
};
