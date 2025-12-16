import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";
import "./Homepage.scss";
import { quizzes } from "../../db/data";
import { useState } from "react";
import Dialog from "../../components/Dialog";
import Instructions from "../../components/Instructions";

export default function Homepage() {
  const navigate = useNavigate();

  const { setUserName } = useAppContext();

  const [showInstructions, setShowInstructions] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      fullName: formData.get("fullName"),
      option: formData.get("option"),
    };
    console.log("Form Data:", data);

    if (data.fullName && data.option) {
      setUserName(data?.fullName);
      navigate(`/quiz/${data?.option}}`, {
        state: { quizId: data?.option },
      });
    }
  };

  const handleShowInstructions = () => {
    setShowInstructions(true);
  };

  return (
    <div className="homepage_container">
      <h1>Welcome To QuizMania</h1>
      <div className="instructions_block">
        Please read all the rules about this Quiz before you start
        <span className="quizRules" onClick={handleShowInstructions}>
          Quiz rules
        </span>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullName">Full Name:</label>
          <input type="text" id="fullName" name="fullName" required />
        </div>
        <div>
          <label>Choose an option:</label>
          {quizzes.map((quiz) => (
            <div key={quiz.quizId}>
              <label>
                <input type="radio" name="option" value={quiz.quizId} />
                {quiz.quizName}
              </label>
            </div>
          ))}
        </div>
        <button type="submit">Start Quiz</button>
      </form>
      <Dialog
        open={showInstructions}
        title="Quiz rules"
        onClose={() => setShowInstructions(false)}
      >
        <Instructions />
      </Dialog>
    </div>
  );
}
