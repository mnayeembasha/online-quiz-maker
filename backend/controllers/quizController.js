const Quiz = require('../models/Quiz');

exports.createQuiz = async (req, res) => {
  const { title, questions } = req.body;

  try {
    const quiz = new Quiz({ title, questions });
    await quiz.save();
    res.status(201).json(quiz);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    res.status(200).json(quizzes);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getQuizById = async (req, res) => {
  const { id } = req.params;

  try {
    const quiz = await Quiz.findById(id);
    res.status(200).json(quiz);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// backend/controllers/quizController.js
// const Quiz = require('../models/Quiz');

// Existing controller functions...

exports.deleteQuiz = async (req, res) => {
  const { id } = req.params;

  try {
    await Quiz.findByIdAndDelete(id);
    res.status(200).json({ message: 'Quiz deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

