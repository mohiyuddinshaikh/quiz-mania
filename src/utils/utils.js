import { quizzes } from "../db/data";

export const fetchQuiz = (quizId) => {
  if (!quizId) return;
  return quizzes.find((quiz) => quiz.quizId === quizId);
};

export const calculateQuizResult = (quizId, answers) => {
  const quiz = fetchQuiz(quizId);
  if (!quiz) {
    return {
      totalQuestions: 0,
      correctCount: 0,
      incorrectCount: 0,
      notAnsweredCount: 0,
      percentage: 0,
    };
  }

  const totalQuestions = quiz.questions.length;

  let correctCount = 0;
  let incorrectCount = 0;
  let notAnsweredCount = 0;

  quiz.questions.forEach((q) => {
    const userAnswer = answers[q.id];

    if (userAnswer == null) {
      notAnsweredCount++;
    } else if (userAnswer === q.correctAnswer) {
      correctCount++;
    } else {
      incorrectCount++;
    }
  });

  const percentage = Math.floor((correctCount / totalQuestions) * 100);

  return {
    totalQuestions,
    correctCount,
    incorrectCount,
    notAnsweredCount,
    percentage,
  };
};
