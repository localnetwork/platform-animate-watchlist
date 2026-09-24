const jwt = require('jsonwebtoken');
const authRepository = require('../repositories/authRepository');

async function auth(req, res, next) {
  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : null;

  if (!token) {
    return res.status(401).json({ error: 'Authentication token missing' });
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    const authUser = await authRepository.findUserAuthContextById(payload.id);
    if (!authUser) {
      return res.status(401).json({ error: 'Invalid or expired token' });
    }

    const roles = authUser.roleLinks.map((link) => link.role.name);
    const permissions = [
      ...new Set(
        authUser.roleLinks
          .flatMap((link) => link.role.permissions || [])
          .map((entry) => entry.permission.name),
      ),
    ];

    req.user = { id: authUser.id, email: authUser.email, roles, permissions };
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Invalid or expired token' });
  }
}

module.exports = auth;
