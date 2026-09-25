const {
  PERMISSIONS,
  ALL_PERMISSION_VALUES,
} = require("../../src/models/permissions");

const ROLE_NAMES = {
  ADMIN: "admin",
  MEMBER: "member",
};

async function upsertPermissions(prisma) {
  const permissions = {};

  for (const permissionName of ALL_PERMISSION_VALUES) {
    const permission = await prisma.permission.upsert({
      where: { name: permissionName },
      update: {},
      create: {
        name: permissionName,
        description: permissionName,
      },
    });
    permissions[permission.name] = permission;
  }

  return permissions;
}

async function upsertRoles(prisma) {
  const admin = await prisma.role.upsert({
    where: { name: ROLE_NAMES.ADMIN },
    update: { description: "Full access role" },
    create: {
      name: ROLE_NAMES.ADMIN,
      description: "Full access role",
    },
  });

  const member = await prisma.role.upsert({
    where: { name: ROLE_NAMES.MEMBER },
    update: { description: "Standard member role" },
    create: {
      name: ROLE_NAMES.MEMBER,
      description: "Standard member role",
    },
  });

  return { admin, member };
}

async function setRolePermissions(prisma, role, permissions) {
  await prisma.rolePermission.deleteMany({
    where: { roleId: role.id },
  });

  await prisma.rolePermission.createMany({
    data: permissions.map((permission) => ({
      roleId: role.id,
      permissionId: permission.id,
    })),
    skipDuplicates: true,
  });
}

async function assignRole(prisma, userId, roleId) {
  await prisma.userRole.upsert({
    where: {
      userId_roleId: { userId, roleId },
    },
    update: {},
    create: { userId, roleId },
  });
}

async function seedRoles(prisma, users) {
  const permissionsByName = await upsertPermissions(prisma);
  const { admin, member } = await upsertRoles(prisma);

  const allPermissions = Object.values(permissionsByName);
  const memberPermissionNames = [
    PERMISSIONS.AUTH_ME_READ,
    PERMISSIONS.AUTH_PROFILE_UPDATE,
    PERMISSIONS.ANIME_READ,
    PERMISSIONS.ANIME_RATING_MANAGE,
    PERMISSIONS.AUTHOR_READ,
  ];
  const memberPermissions = memberPermissionNames.map(
    (name) => permissionsByName[name],
  );

  await setRolePermissions(prisma, admin, allPermissions);
  await setRolePermissions(prisma, member, memberPermissions);

  const adminUser = users.find((user) => user.email === "demo1@anime.local");
  const memberUser = users.find((user) => user.email === "demo2@anime.local");

  await prisma.userRole.deleteMany({
    where: {
      userId: {
        in: users.map((user) => user.id),
      },
    },
  });

  if (adminUser) {
    await assignRole(prisma, adminUser.id, admin.id);
  }
  if (memberUser) {
    await assignRole(prisma, memberUser.id, member.id);
  }
}

module.exports = {
  seedRoles,
};
