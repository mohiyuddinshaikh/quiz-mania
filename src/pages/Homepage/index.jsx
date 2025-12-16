import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";
import "./Homepage.scss";
import { quizzes } from "../../db/data";
import { useState } from "react";
import Dialog from "../../components/Dialog";
import Instructions from "../../components/Instructions";
import { Check } from "lucide-react";

export default function Homepage() {
  const navigate = useNavigate();
  const { setUserName } = useAppContext();

  const [showInstructions, setShowInstructions] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const formData = new FormData(e.target);
    const fullName = formData.get("fullName")?.trim();
    const option = formData.get("option");

    if (!fullName || !option) {
      setError("Please enter your name and select a topic to continue.");
      return;
    }

    const nameRegex = /^[A-Za-z ]+$/;

    if (!nameRegex.test(fullName)) {
      setError("Name should only contain letters.");
      return;
    }

    setUserName(fullName);
    navigate(`/quiz/${option}`, { state: { quizId: option } });
  };

  return (
    <div className="homepage_container light">
      <h1>
        Welcome to{" "}
        <span className="brand">
          Quiz<span className="brand-mania">Mania</span>
        </span>
      </h1>

      <div className="instructions_block">
        <p>Please read all the rules about this quiz before you start.</p>
        <span className="quizRules" onClick={() => setShowInstructions(true)}>
          Quiz rules
        </span>
      </div>

      <form onSubmit={handleSubmit}>
        <p className="select_topic">Full Name</p>

        <div className="full_name">
          <input type="text" name="fullName" placeholder="Full name" />
        </div>

        <p className="select_topic">Please select topic to continue</p>

        <div className="quiz_options">
          {quizzes.map((quiz) => (
            <label className="quiz_card">
              <input type="radio" name="option" value={quiz.quizId} />
              <span className="check_circle">
                <Check size={14} color="#FFF" strokeWidth={3} />
              </span>

              <span className="quiz_text">{quiz.quizName}</span>
            </label>
          ))}
        </div>
        {error && <p className="form-error">{error}</p>}

        <button type="submit">Start Quiz</button>
      </form>

      <Dialog
        open={showInstructions}
        title="Quiz Rules"
        onClose={() => setShowInstructions(false)}
      >
        <Instructions />
      </Dialog>
    </div>
  );
}
