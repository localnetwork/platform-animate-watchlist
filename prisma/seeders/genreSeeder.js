const GENRE_NAMES = [
  'Action',
  'Adult Cast',
  'Adventure',
  'Anthropomorphic',
  'Avant Garde',
  'Boys Love',
  'CGDCT',
  'Comedy',
  'Drama',
  'Ecchi',
  'Erotica',
  'Fantasy',
  'Girls Love',
  'Gore',
  'Gourmet',
  'Harem',
  'Historical',
  'Horror',
  'Isekai',
  'Iyashikei',
  'Josei',
  'Love Status Quo',
  'Mahou Shoujo',
  'Martial Arts',
  'Mecha',
  'Military',
  'Music',
  'Mystery',
  'Mythology',
  'Organized Crime',
  'Otaku Culture',
  'Parody',
  'Performing Arts',
  'Psychological',
  'Reincarnation',
  'Romance',
  'School',
  'Sci-Fi',
  'Seinen',
  'Shoujo',
  'Shounen',
  'Slice of Life',
  'Super Power',
  'Supernatural',
];

async function seedGenres(prisma) {
  const genresByName = {};

  for (const name of GENRE_NAMES) {
    const genre = await prisma.genre.upsert({
      where: { name },
      update: {},
      create: { name },
    });
    genresByName[genre.name] = genre;
  }

  return genresByName;
}

module.exports = {
  GENRE_NAMES,
  seedGenres,
};
