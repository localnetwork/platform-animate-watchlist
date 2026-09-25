function requirePermission(permission) {
  return function rbacPermission(req, res, next) {
    const permissions = req.user && req.user.permissions ? req.user.permissions : [];
    if (!permissions.includes(permission)) {
      return res.status(403).json({ error: 'Forbidden: missing permission' });
    }
    next();
  };
}

function requireAnyPermission(permissionList) {
  return function rbacAnyPermission(req, res, next) {
    const permissions = req.user && req.user.permissions ? req.user.permissions : [];
    if (!permissionList.some((permission) => permissions.includes(permission))) {
      return res.status(403).json({ error: 'Forbidden: missing permission' });
    }
    next();
  };
}

module.exports = {
  requirePermission,
  requireAnyPermission,
};
