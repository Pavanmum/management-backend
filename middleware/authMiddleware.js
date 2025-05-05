import jwt from 'jsonwebtoken';

export const authenticate = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ message: 'Unauthorized',success: false });

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    if (!decoded) return res.status(401).json({ message: 'Unauthorized',success: false });

    req.user = decoded;
    next();
  } catch (err) {
    console.log(err)
    res.status(401).json({ message: 'Invalid token' });
  }
};
