const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const jwt = require("jsonwebtoken");
const { jwt_Secret } = require("../config");

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic

  const { username, password } = req.body;

  await User.create({
    username,
    password,
  });

  res.json({
    message: "User created successfully",
  });
});

router.post("/signin", (req, res) => {
  // Implement admin signup logic

  const { username, password } = req.body;

  const findUser = User.find({
    username,
    password,
  });

  if (findUser) {
    const tokenCreate = jwt.sign(
      {
        username,
      },
      jwt_Secret
    );

    res.json({
      token: tokenCreate,
    });
  } else {
    res.status(403).json({
      msg: "User not found",
    });
  }
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  const allCourses = await Course.find();
  res.json({
    allCourses,
  });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const username = req.username;
  const courseId = req.params.courseId;
  const purchaseCourse = await User.updateOne(
    {
      username,
    },
    {
      $push: {
        purchaseCourses: courseId,
      },
    }
  );

  res.json({
    message: "Course purchased successfully",
  });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const username = req.username;

  const getUser = await User.findOne({
    username,
  });

  console.log(getUser);

  const allPurchaseCourses = await Course.find({
    _id: {
      $in: getUser.purchaseCourses,
    },
  });

  res.json({
    allPurchaseCourses,
  });
});

module.exports = router;
