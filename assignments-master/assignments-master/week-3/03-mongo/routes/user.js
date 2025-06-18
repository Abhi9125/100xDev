const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const { username, password } = req.body;

  await User.create({
    username,
    password,
  });

  res.json({
    message: "User created Successfully",
  });
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  try {
    const response = await Course.find();

    res.json({
      courses: response,
    });
  } catch (err) {
    res.json({
      msg: "Courses are not available",
      err,
    });
  }
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic

  const courseId = req.params.courseId;
  console.log("courseId from params:", courseId);

  const username = req.headers.username;
  try {
    await User.updateOne(
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
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const userprofile = await User.findOne({
    username: req.headers.username,
  });
  console.log(userprofile);

  const allPurchaseCourseList = await Course.find({
    _id: {
      $in: userprofile.purchaseCourses,
    },
  });

  res.json({
    coursePurchase: allPurchaseCourseList,
  });
});

module.exports = router;
