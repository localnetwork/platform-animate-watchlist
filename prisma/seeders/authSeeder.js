const bcrypt = require('bcryptjs');
const { SEED_USERS } = require('./seedData');

async function seedAuth(prisma) {
  const users = [];

  for (const entry of SEED_USERS) {
    const passwordHash = await bcrypt.hash(entry.password, 10);
    const user = await prisma.user.upsert({
      where: { email: entry.email },
      update: {
        name: entry.name,
        password: passwordHash,
      },
      create: {
        email: entry.email,
        name: entry.name,
        password: passwordHash,
      },
    });
    users.push(user);
  }

  return users;
}

module.exports = {
  seedAuth,
};
