const { SEED_COUNTS } = require('./seedData');

function buildAuthorName(index) {
  return `Author ${String(index + 1).padStart(3, '0')}`;
}

function buildAuthorBio(index) {
  return `Auto-generated author profile #${index + 1} for seeding large datasets.`;
}

async function seedAuthors(prisma, users) {
  const userOne = users.find((user) => user.email === 'demo1@anime.local');
  const userTwo = users.find((user) => user.email === 'demo2@anime.local');

  const userOneAuthors = [];
  for (let index = 0; index < SEED_COUNTS.AUTHORS; index += 1) {
    const author = await prisma.animeAuthor.create({
      data: {
        userId: userOne.id,
        name: buildAuthorName(index),
        bio: buildAuthorBio(index),
      },
    });
    userOneAuthors.push(author);
  }

  const userTwoAuthors = [
    await prisma.animeAuthor.create({
      data: {
        userId: userTwo.id,
        name: 'Member Author 001',
        bio: 'Member-owned sample author.',
      },
    }),
  ];

  return {
    [userOne.email]: userOneAuthors,
    [userTwo.email]: userTwoAuthors,
  };
}

module.exports = {
  seedAuthors,
};
