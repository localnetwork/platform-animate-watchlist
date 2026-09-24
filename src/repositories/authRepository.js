const prisma = require('../config/prisma');

async function findUserByEmail(email) {
  return prisma.user.findUnique({ where: { email } });
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

async function findUserProfileById(id) {
  return prisma.user.findUnique({
    where: { id },
    select: {
      id: true,
      email: true,
      name: true,
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
  createUser,
  findRoleByName,
  assignRoleToUser,
  findUserProfileById,
  findUserAuthContextById,
};
