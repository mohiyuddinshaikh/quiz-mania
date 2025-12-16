import { useLocation, useNavigate } from "react-router-dom";
import "./Result.scss";
import { calculateQuizResult } from "../../utils/utils";

const PASSING_PERCENTAGE = 70;

export default function Result() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { quizId, answers } = state;

  const summary = calculateQuizResult(quizId, answers);
  const {
    percentage,
    correctCount,
    incorrectCount,
    notAnsweredCount,
    totalQuestions,
  } = summary;

  const handleRetake = () => {
    navigate("/");
  };

  return (
    <div className="result_container">
      <div className="result-title">
        {percentage < PASSING_PERCENTAGE ? (
          <div>
            <div className="small">
              You successfully completed the Quiz but you need to
            </div>
            <h1 className="big">KEEP PRACTICING</h1>
          </div>
        ) : (
          <div>
            <div className="big">CONGRATULATIONS</div>
            <div className="small">
              You successfully completed the Quiz and holds
            </div>
          </div>
        )}
      </div>
      {percentage < PASSING_PERCENTAGE ? (
        <div className="fail-score">
          <div className="one">Your Score</div>
          <div className="two">{percentage}%</div>
        </div>
      ) : (
        <div className="success-score">
          <div className="one">Your Score</div>
          <div className="three"></div>
        </div>
      )}
      <div className="summary">
        <div>Out of {totalQuestions} Questions</div>
        <span>{correctCount} Correct </span>
        <span>{incorrectCount} Incorrect </span>
        <span>{notAnsweredCount} Not Answered</span>
      </div>
      <button className="retake" onClick={handleRetake}>
        Retake Quiz
      </button>
    </div>
  );
}
