const prisma = require('../config/prisma');

async function findUserByEmail(email) {
  return prisma.user.findUnique({ where: { email } });
}

async function findUserById(id) {
  return prisma.user.findUnique({ where: { id } });
}

async function findUserByUsername(username) {
  return prisma.user.findUnique({
    where: { username },
    select: {
      id: true,
      username: true,
      name: true,
      bio: true,
      avatarUrl: true,
      socialLinks: true,
      createdAt: true,
    },
  });
}

async function createUser(data) {
  return prisma.user.create({ data });
}

async function findRoleByName(name) {
  return prisma.role.findUnique({ where: { name } });
}

async function assignRoleToUser(userId, roleId) {
  return prisma.userRole.upsert({
    where: {
      userId_roleId: { userId, roleId },
    },
    update: {},
    create: { userId, roleId },
  });
}

async function updateUserById(id, data) {
  return prisma.user.update({
    where: { id },
    data,
  });
}

async function findUserProfileById(id) {
  return prisma.user.findUnique({
    where: { id },
    select: {
      id: true,
      email: true,
      name: true,
      username: true,
      bio: true,
      avatarUrl: true,
      socialLinks: true,
      createdAt: true,
      roleLinks: {
        select: {
          role: {
            select: {
              name: true,
              permissions: {
                select: {
                  permission: {
                    select: { name: true },
                  },
                },
              },
            },
          },
        },
      },
    },
  });
}

async function findUserAuthContextById(id) {
  return prisma.user.findUnique({
    where: { id },
    select: {
      id: true,
      email: true,
      roleLinks: {
        select: {
          role: {
            select: {
              name: true,
              permissions: {
                select: {
                  permission: {
                    select: { name: true },
                  },
                },
              },
            },
          },
        },
      },
    },
  });
}

module.exports = {
  findUserByEmail,
  findUserByUsername,
  findUserById,
  createUser,
  findRoleByName,
  assignRoleToUser,
  updateUserById,
  findUserProfileById,
  findUserAuthContextById,
};
