"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const prisma_1 = require("../generated/prisma");
const prisma = new prisma_1.PrismaClient();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("hello");
});
app.get("/surveys", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const surveys = yield prisma.survey.findMany();
        res.json({
            surveys,
        });
    }
    catch (error) {
        res.send(400).json({
            error: error.message,
        });
    }
}));
app.post("/surveys", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    const { title, surveyQues, surveyOption, votes } = req.body;
    try {
        const surveyTitleRes = yield prisma.survey.create({
            data: {
                title,
            },
        });
        const surveyQuestionRes = yield prisma.surveyQuestions.create({
            data: {
                text: surveyQues,
                surveyId: surveyTitleRes.id,
            },
        });
        const optionRes = yield prisma.option.create({
            data: {
                text: surveyOption,
                votes,
                surveyQuestionId: surveyQuestionRes.id,
            },
        });
        res.send(200).json({
            message: "Done",
        });
    }
    catch (error) {
        res.send(400).json({
            messsage: error.message,
        });
    }
}));
app.get("/surveys/questions", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allSurveyQuestions = yield prisma.surveyQuestions.findMany();
        res.json({
            allSurveyQuestions,
        });
    }
    catch (_a) { }
}));
app.get("/surveys/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const getSpecificSurvey = yield prisma.surveyQuestions.findFirst({
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
    }
    catch (error) {
        res.send(400).json({
            message: error.message,
        });
    }
}));
app.put("/surveys/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { updateData } = req.body;
    try {
        const updatedRes = yield prisma.surveyQuestions.update({
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
    }
    catch (error) {
        {
            message: error;
        }
    }
}));
app.delete("/surveys/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield prisma.option.deleteMany({
            where: {
                surveyQuestionId: Number(id),
            },
        });
        const detedSurveyQuestion = yield prisma.surveyQuestions.delete({
            where: {
                id: Number(id),
            },
        });
        console.log(detedSurveyQuestion);
        res.json({
            detedSurveyQuestion,
        });
    }
    catch (error) {
        res.json({
            message: error,
        });
    }
}));
app.listen(3000);
