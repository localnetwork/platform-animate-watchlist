async function seedAuthors(prisma, users) {
  const userOne = users.find((user) => user.email === 'demo1@anime.local');
  const userTwo = users.find((user) => user.email === 'demo2@anime.local');

  const userOneAuthors = [];
  userOneAuthors.push(
    await prisma.animeAuthor.create({
      data: {
        userId: userOne.id,
        name: 'Koyoharu Gotouge',
        bio: 'Japanese manga artist, best known for Demon Slayer.',
      },
    }),
  );
  userOneAuthors.push(
    await prisma.animeAuthor.create({
      data: {
        userId: userOne.id,
        name: 'Masashi Kishimoto',
        bio: 'Japanese manga artist, creator of Naruto.',
      },
    }),
  );

  const userTwoAuthors = [];
  userTwoAuthors.push(
    await prisma.animeAuthor.create({
      data: {
        userId: userTwo.id,
        name: 'Hajime Isayama',
        bio: 'Japanese manga artist, creator of Attack on Titan.',
      },
    }),
  );

  return {
    [userOne.email]: userOneAuthors,
    [userTwo.email]: userTwoAuthors,
  };
}

module.exports = {
  seedAuthors,
};
