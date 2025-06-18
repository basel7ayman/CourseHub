import jwt from "jsonwebtoken";

export const generateToken = (res, user, message = "Logged in successfully.") => {
  const token = jwt.sign(
    { userId: user._id },
    process.env.SECRET_KEY,
    { expiresIn: "7d" }
  );

  res.cookie("token", token, {
    httpOnly: true,
    secure: true,              // ⬅️ Required for cross-origin
    sameSite: "None",          // ⬅️ Required for GitHub Pages
    maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
  });

  res.status(200).json({
    success: true,
    message,
    user: {
      _id: user._id,
      name: user.name,
      email: user.email,
      photoUrl: user.photoUrl || null
    }
  });
};