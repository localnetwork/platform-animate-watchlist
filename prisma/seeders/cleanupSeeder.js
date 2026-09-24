async function clearUserDomainData(prisma, userId) {
  await prisma.animeEntryAuthor.deleteMany({
    where: { animeEntry: { userId } },
  });
  await prisma.animeRating.deleteMany({
    where: { OR: [{ userId }, { animeEntry: { userId } }] },
  });
  await prisma.animeEpisode.deleteMany({
    where: { animeEntry: { userId } },
  });
  await prisma.animeEntry.deleteMany({
    where: { userId },
  });
  await prisma.animeAuthor.deleteMany({
    where: { userId },
  });
}

async function clearDomainForUsers(prisma, users) {
  for (const user of users) {
    await clearUserDomainData(prisma, user.id);
  }
}

module.exports = {
  clearDomainForUsers,
};
