const TYPE_NAMES = ["TV", "Movie", "OVA", "ONA", "Special"];

console.log("TYPE_NAMES", TYPE_NAMES);
async function seedTypes(prisma) {
  const typesByName = {};

  for (const name of TYPE_NAMES) {
    const type = await prisma.animeType.upsert({
      where: { name },
      update: {},
      create: { name },
    });
    typesByName[type.name] = type;
  }

  return typesByName;
}

module.exports = {
  TYPE_NAMES,
  seedTypes,
};
