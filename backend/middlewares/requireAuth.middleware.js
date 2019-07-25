async function requireAuth(req, res, next) {  
  
  if (!req.session.user) {
    res.status(401).end('Unauthorized');
    return;
  }
  next();
}

module.exports = requireAuth
