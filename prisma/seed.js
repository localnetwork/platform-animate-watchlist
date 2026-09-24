require('dotenv').config();
const { PrismaClient } = require('../src/generated/prisma');
const { seedAuth } = require('./seeders/authSeeder');
const { seedRoles } = require('./seeders/roleSeeder');
const { clearDomainForUsers } = require('./seeders/cleanupSeeder');
const { seedAuthors } = require('./seeders/authorSeeder');
const { seedAnime } = require('./seeders/animeSeeder');

const prisma = new PrismaClient();

async function main() {
  const users = await seedAuth(prisma);
  await seedRoles(prisma, users);
  await clearDomainForUsers(prisma, users);
  const authorsByUserEmail = await seedAuthors(prisma, users);
  await seedAnime(prisma, users, authorsByUserEmail);

  console.log('Seed completed successfully.');
}

main()
  .catch((error) => {
    console.error('Seed failed:', error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
