const crypto = require('crypto');

// Générer une clé secrète aléatoire
const generateRandomSecretKey = (keyLength) => {
  const randomKey = crypto.randomBytes(keyLength);
  return randomKey.toString('hex');
};

// Utilisez cette clé secrète pour signer les jetons JWT
const secretKey = process.env.SECRET_KEY || generateRandomSecretKey(32);
const expiresIn = 3600;
module.exports = {secretKey , expiresIn}