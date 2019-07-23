async function requireAuth(req, res, next) {  
  console.log('req session in the back -', req.session);
  
  if (!req.session.user) {
    res.status(401).end('Unauthorized');
    return;
  }
  next();
}

module.exports = requireAuth
