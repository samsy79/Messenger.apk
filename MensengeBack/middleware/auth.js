const jwt = require('jsonwebtoken');
const secretKey = process.env.secretKey;


const isAuthenticate = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'token incorrect' });
    }

    const token = authHeader.split(' ')[1];

    const decrypteToken = jwt.verify(token, secretKey);
    const userId = decrypteToken.id;
    console.log('my',userId)
    req.auth = {
      id: userId
    };
    next();
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      return res.status(401).json({ error: 'Token invalide' });
    }
  }
};


module.exports = {isAuthenticate}
