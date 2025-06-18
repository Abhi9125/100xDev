const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();
const jwt = require("jsonwebtoken");
const { jwt_Secret } = require("../config");

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const { username, password } = req.body;
  await Admin.create({
    username,
    password,
  });

  res.json({
    message: "Admin created successfully",
  });
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  const { username, password } = req.body;

  const userfind = await Admin.find({
    username,
    password,
  });

  if (userfind) {
    const token = jwt.sign(
      {
        username,
      },
      jwt_Secret
    );
    res.send(token);
  } else {
    res.json({
      msg: "User not found",
    });
  }
});

router.post("/courses", adminMiddleware, async (req, res) => {
  const { title, description, price, imageLink } = req.body;
  // Implement course creation logic
  const courseCreate = await Course.create({
    title,
    description,
    price,
    imageLink,
  });
  console.log(courseCreate);
  res.json({
    message: "Course created successfully",
    courseId: courseCreate._id,
  });
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic

  const allCourses = await Course.find();
  res.json({
    allCourses,
  });
});

module.exports = router;
