const { WatchStatus } = require('../../src/generated/prisma');
const { SEED_COUNTS, cover } = require('./seedData');

const STATUSES = [
  WatchStatus.PLANNED,
  WatchStatus.WATCHING,
  WatchStatus.COMPLETED,
  WatchStatus.DROPPED,
];

function rotate(list, index) {
  return list[index % list.length];
}

async function seedAnimeForAdmin(prisma, user, authors, genresByName, typesByName) {
  const genreList = Object.values(genresByName);
  const typeList = Object.values(typesByName);

  for (let index = 0; index < SEED_COUNTS.ANIME; index += 1) {
    const author = rotate(authors, index);
    const status = rotate(STATUSES, index);
    const type = rotate(typeList, index);
    const genreOne = rotate(genreList, index);
    const genreTwo = rotate(genreList, index + 7);

    const animeEntry = await prisma.animeEntry.create({
      data: {
        userId: user.id,
        title: `Seeded Anime ${String(index + 1).padStart(3, '0')}`,
        description: `Auto-generated description for seeded anime #${index + 1}.`,
        coverImageUrl: cover(`covers/seeded-anime-${index + 1}.jpg`),
        status,
        notes: `Auto note ${index + 1}.`,
        typeId: type.id,
        authorLinks: {
          create: [{ authorId: author.id, role: 'Creator' }],
        },
        genreLinks: {
          create: [{ genreId: genreOne.id }, { genreId: genreTwo.id }],
        },
      },
    });

    await prisma.animeEpisode.createMany({
      data: [
        {
          animeEntryId: animeEntry.id,
          episodeNumber: 1,
          title: `Episode 1 - Anime ${index + 1}`,
          description: `Opening episode for seeded anime #${index + 1}.`,
          durationMinutes: 24,
        },
        {
          animeEntryId: animeEntry.id,
          episodeNumber: 2,
          title: `Episode 2 - Anime ${index + 1}`,
          description: `Second episode for seeded anime #${index + 1}.`,
          durationMinutes: 24,
        },
      ],
    });

    await prisma.animeRating.create({
      data: {
        userId: user.id,
        animeEntryId: animeEntry.id,
        value: (index % 10) + 1,
      },
    });
  }
}

async function seedAnimeForMember(prisma, user, authors, genresByName, typesByName) {
  const author = authors[0];
  const type = typesByName.TV || Object.values(typesByName)[0];
  const genre = genresByName.Action || Object.values(genresByName)[0];

  const anime = await prisma.animeEntry.create({
    data: {
      userId: user.id,
      title: 'Member Seeded Anime 001',
      description: 'Sample anime owned by seeded member user.',
      coverImageUrl: cover('covers/member-seeded-anime-001.jpg'),
      status: WatchStatus.WATCHING,
      notes: 'Used for member-role testing.',
      typeId: type.id,
      authorLinks: {
        create: [{ authorId: author.id, role: 'Creator' }],
      },
      genreLinks: {
        create: [{ genreId: genre.id }],
      },
    },
  });

  await prisma.animeEpisode.create({
    data: {
      animeEntryId: anime.id,
      episodeNumber: 1,
      title: 'Member Episode 1',
      durationMinutes: 24,
    },
  });
}

async function seedAnime(prisma, users, authorsByUserEmail, genresByName, typesByName) {
  const adminUser = users.find((user) => user.email === 'demo1@anime.local');
  const memberUser = users.find((user) => user.email === 'demo2@anime.local');

  await seedAnimeForAdmin(
    prisma,
    adminUser,
    authorsByUserEmail[adminUser.email],
    genresByName,
    typesByName,
  );
  await seedAnimeForMember(
    prisma,
    memberUser,
    authorsByUserEmail[memberUser.email],
    genresByName,
    typesByName,
  );
}

module.exports = {
  seedAnime,
};
