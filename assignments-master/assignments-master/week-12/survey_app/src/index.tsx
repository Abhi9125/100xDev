import express from "express";
import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello");
});

// Get all survey
app.get("/surveys", async (req, res) => {
  try {
    const surveys = await prisma.survey.findMany();

    res.json({
      surveys,
    });
  } catch (error: any) {
    res.send(400).json({
      error: error.message,
    });
  }
});

// Create the survey, survey Questions, options
app.post("/surveys", async (req, res) => {
  console.log(req.body);
  const { title, surveyQues, surveyOption, votes } = req.body;

  try {
    const surveyTitleRes = await prisma.survey.create({
      data: {
        title,
      },
    });

    const surveyQuestionRes = await prisma.surveyQuestions.create({
      data: {
        text: surveyQues,
        surveyId: surveyTitleRes.id,
      },
    });

    const optionRes = await prisma.option.create({
      data: {
        text: surveyOption,
        votes,
        surveyQuestionId: surveyQuestionRes.id,
      },
    });

    res.send(200).json({
      message: "Done",
    });
  } catch (error: any) {
    res.send(400).json({
      messsage: error.message,
    });
  }
});

// Get all survey Questions
app.get("/surveys/questions", async (req, res) => {
  try {
    const allSurveyQuestions = await prisma.surveyQuestions.findMany();

    res.json({
      allSurveyQuestions,
    });
  } catch {}
});

// Get surveyQuestion by its id
app.get("/surveys/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const getSpecificSurvey = await prisma.surveyQuestions.findFirst({
      where: {
        surveyId: Number(id),
      },
      select: {
        id: true,
        text: true,
        surveyDetails: true,
      },
    });
    res.json({
      message: getSpecificSurvey,
    });
  } catch (error: any) {
    res.send(400).json({
      message: error.message,
    });
  }
});

// Update the survay Question
app.put("/surveys/:id", async (req, res) => {
  const { id } = req.params;
  const { updateData } = req.body;

  try {
    const updatedRes = await prisma.surveyQuestions.update({
      where: {
        id: Number(id),
      },
      data: {
        text: updateData,
      },
    });

    res.json({
      updatedRes,
    });
  } catch (error: any) {
    {
      message: error;
    }
  }
});

// Delete the survey
app.delete("/surveys/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.option.deleteMany({
      where: {
        surveyQuestionId: Number(id),
      },
    });
    const detedSurveyQuestion = await prisma.surveyQuestions.delete({
      where: {
        id: Number(id),
      },
    });
    console.log(detedSurveyQuestion);
    res.json({
      detedSurveyQuestion,
    });
  } catch (error) {
    res.json({
      message: error,
    });
  }
});

app.listen(3000);
