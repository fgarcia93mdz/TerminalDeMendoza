const jwt = require('jsonwebtoken');


//esta clave secreta hay que ponerla en un .env
const TOKEN_SECRET = require("../config/token");

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization']
  console.log(authHeader);
  //el token viene asi "Bearer token..."
  const token = authHeader && authHeader.split(' ')[1]

  if (token == null) return res.status(401).json({mensaje:"falta token"})

  jwt.verify(token, TOKEN_SECRET , (err, usuario) => {
    if (err) return res.status(403).json({err});

    req.usuario = usuario
    next()
  })

  
}

module.exports = { authenticateToken };