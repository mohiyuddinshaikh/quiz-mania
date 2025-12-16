import { useEffect, useRef, useState } from "react";
import "./Quiz.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { fetchQuiz } from "../../utils/utils";

export default function Quiz() {
  const navigate = useNavigate();

  const { state } = useLocation();
  const { quizId } = state;

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answers, setAnswers] = useState({});

  const quiz = fetchQuiz(quizId);
  const { questions } = quiz;
  const { question, options } = questions[currentQuestion];
  const totalQuestions = questions.length;
  const progressPercent = ((currentQuestion + 1) / totalQuestions) * 100;

  console.log("quiz", quiz);
  console.log("answers", answers);

  const hasSkippedRef = useRef(false);

  const [timeLeft, setTimeLeft] = useState(
    questions[currentQuestion].timeLimit
  );

  useEffect(() => {
    hasSkippedRef.current = false;
    setTimeLeft(questions[currentQuestion].timeLimit);
  }, [currentQuestion, questions]);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          if (!hasSkippedRef.current) {
            hasSkippedRef.current = true;
            handleSkip();
          }
          clearInterval(timerId);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerId);
  }, [currentQuestion]);

  const handleNext = () => {
    const questionId = questions[currentQuestion].id;

    setAnswers((prev) => ({
      ...prev,
      [questionId]: selectedOption ?? null,
    }));

    setSelectedOption(null);
    setCurrentQuestion((prev) => prev + 1);
  };

  function handleSkip() {
    setSelectedOption(null);
    if (currentQuestion === questions?.length - 1) {
      handleFinish();
    } else {
      setCurrentQuestion((prev) => prev + 1);
    }
  }

  const handleFinish = () => {
    navigate("/result", {
      state: {
        quizId,
        answers,
      },
    });
  };

  return (
    <div className="quiz-container">
      <div className="quizStatusBar">
        <div className="top">
          <div className="currentQuestion">
            {currentQuestion + 1}/{questions?.length}
          </div>
          <div className="timer">{timeLeft}s</div>
        </div>
        <div className="bottom">
          <div
            className="progress-fill"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>
      <div className="question">
        {currentQuestion + 1} <span>{question}</span>
      </div>
      <div className="options">
        {options.map((option) => (
          <div key={option.id}>
            <label>
              <input
                type="radio"
                name="option"
                value={option.id}
                checked={selectedOption === option.id}
                onChange={() => setSelectedOption(option.id)}
              />
              {option.text}
            </label>
          </div>
        ))}
      </div>

      <div className="ctas">
        {currentQuestion === questions?.length - 1 ? (
          <button className="next" onClick={handleFinish}>
            Finish
          </button>
        ) : (
          <button className="next" onClick={handleNext}>
            Next
          </button>
        )}

        <button className="skip" onClick={handleSkip}>
          Skip this question
        </button>
      </div>
    </div>
  );
}
