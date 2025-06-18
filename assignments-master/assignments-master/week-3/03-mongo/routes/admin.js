const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;

  await Admin.create({
    username,
    password,
  });

  res.json({
    message: "Admin created successfully",
  });
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic

  const { title, description, price, imageLink } = req.body;

  const courseCreationRes = await Course.create({
    title,
    description,
    price,
    imageLink,
  });

  console.log(courseCreationRes);

  res.json({
    message: "Course created successfully",
    courseId: courseCreationRes._id,
  });
});

router.get("/courses", adminMiddleware, (req, res) => {
  // Implement fetching all courses logic
  Course.find().then(function (response) {
    if (response) {
      res.json({
        AllCourses: response,
      });
    } else {
      res.json({
        msg: "No course is available",
      });
    }
  });
});

module.exports = router;
