import { useLocation, useNavigate } from "react-router-dom";
import "./Result.scss";
import { calculateQuizResult } from "../../utils/utils";
import { Check, Frown } from "lucide-react";

const PASSING_PERCENTAGE = 75;

export default function Result() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { quizId, answers } = state;

  const {
    percentage,
    correctCount,
    incorrectCount,
    notAnsweredCount,
    totalQuestions,
  } = calculateQuizResult(quizId, answers);

  const isPass = percentage >= PASSING_PERCENTAGE;

  return (
    <div className="result_container">
      <div className={`status-icon ${isPass ? "success" : "fail"}`}>
        {isPass ? (
          <Check size={60} color="#16a34a" />
        ) : (
          <Frown size={120} color="red" />
        )}
      </div>

      {isPass ? (
        <>
          <h1 className="title spaced">CONGRATULATION</h1>
          <p className="subtitle">
            You successfully completed the Quiz and holds
          </p>
        </>
      ) : (
        <>
          <p className="subtitle">
            You successfully completed the Quiz but you need to
          </p>
          <h1 className="title spaced">
            <div>KEEP</div> PRACTICING!
          </h1>
        </>
      )}

      <div className={`score ${isPass ? "success" : "fail"}`}>
        <div className="label">Your Score</div>
        <div className="value">{percentage}%</div>
        {isPass ? <div className="great-job">Great Job!</div> : null}
      </div>

      <div className="summary-card">
        <div className="summary-title">Out of {totalQuestions} question</div>
        <div className="summary-row">
          <span className="correct">
            {correctCount} <span className="labels">Correct</span>
          </span>
          <span className="incorrect">
            {incorrectCount} <span className="labels">Incorrect</span>
          </span>
          <span className="skipped">
            {notAnsweredCount} <span className="labels">Not answered</span>
          </span>
        </div>
      </div>

      <button className="retake" onClick={() => navigate("/")}>
        Retake Quiz
      </button>
    </div>
  );
}
