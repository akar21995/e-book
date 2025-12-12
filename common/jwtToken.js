import jwt from "jsonwebtoken";
const secretKey = process.env.JWT_SECRET || "";

function authenticateUser(req, res, next) {
    const header = req.header["authorization"];
    const token = header && header.split(' ')[1];

    if(token == null) {
        return res.sendStatus(401);
    }

    jwt.verify(token, secretKey, (err, decodeToken) => {
        if(err) {
            return res.sendStatus(401);
        }

        req.user = user;
        next();
    })
}

module.exports = authenticateUser;