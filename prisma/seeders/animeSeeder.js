const { WatchStatus } = require('../../src/generated/prisma');
const { cover } = require('./seedData');

async function seedAnimeForUserOne(prisma, user, authors) {
  const demonSlayerAuthor = authors.find((author) => author.name === 'Koyoharu Gotouge');
  const narutoAuthor = authors.find((author) => author.name === 'Masashi Kishimoto');

  const demonSlayer = await prisma.animeEntry.create({
    data: {
      userId: user.id,
      title: 'Demon Slayer',
      description: 'A young swordsman fights demons to cure his sister.',
      coverImageUrl: cover('covers/demon-slayer.jpg'),
      status: WatchStatus.WATCHING,
      notes: 'Great animation quality.',
      authorLinks: {
        create: [{ authorId: demonSlayerAuthor.id, role: 'Manga Creator' }],
      },
    },
  });

  await prisma.animeEpisode.createMany({
    data: [
      {
        animeEntryId: demonSlayer.id,
        episodeNumber: 1,
        title: 'Cruelty',
        durationMinutes: 24,
      },
      {
        animeEntryId: demonSlayer.id,
        episodeNumber: 2,
        title: 'Trainer Sakonji Urokodaki',
        durationMinutes: 24,
      },
    ],
  });

  await prisma.animeRating.create({
    data: {
      userId: user.id,
      animeEntryId: demonSlayer.id,
      value: 9,
    },
  });

  const naruto = await prisma.animeEntry.create({
    data: {
      userId: user.id,
      title: 'Naruto',
      description: 'A ninja seeks recognition and dreams of becoming Hokage.',
      coverImageUrl: cover('covers/naruto.jpg'),
      status: WatchStatus.COMPLETED,
      notes: 'Classic shonen series.',
      authorLinks: {
        create: [{ authorId: narutoAuthor.id, role: 'Manga Creator' }],
      },
    },
  });

  await prisma.animeEpisode.createMany({
    data: [
      {
        animeEntryId: naruto.id,
        episodeNumber: 1,
        title: 'Enter Naruto Uzumaki!',
        durationMinutes: 23,
      },
      {
        animeEntryId: naruto.id,
        episodeNumber: 2,
        title: 'My Name is Konohamaru!',
        durationMinutes: 23,
      },
    ],
  });

  await prisma.animeRating.create({
    data: {
      userId: user.id,
      animeEntryId: naruto.id,
      value: 8,
    },
  });
}

async function seedAnimeForUserTwo(prisma, user, authors) {
  const aotAuthor = authors.find((author) => author.name === 'Hajime Isayama');

  const aot = await prisma.animeEntry.create({
    data: {
      userId: user.id,
      title: 'Attack on Titan',
      description: 'Humanity fights for survival against gigantic titans.',
      coverImageUrl: cover('covers/attack-on-titan.jpg'),
      status: WatchStatus.PLANNED,
      notes: 'Queued for next month.',
      authorLinks: {
        create: [{ authorId: aotAuthor.id, role: 'Manga Creator' }],
      },
    },
  });

  await prisma.animeEpisode.create({
    data: {
      animeEntryId: aot.id,
      episodeNumber: 1,
      title: 'To You, in 2000 Years',
      durationMinutes: 24,
    },
  });
}

async function seedAnime(prisma, users, authorsByUserEmail) {
  const userOne = users.find((user) => user.email === 'demo1@anime.local');
  const userTwo = users.find((user) => user.email === 'demo2@anime.local');

  await seedAnimeForUserOne(prisma, userOne, authorsByUserEmail[userOne.email]);
  await seedAnimeForUserTwo(prisma, userTwo, authorsByUserEmail[userTwo.email]);
}

module.exports = {
  seedAnime,
};
