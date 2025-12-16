import { useLocation, useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";
import "./Header.scss";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const { userName } = useAppContext();

  const path = location.pathname;

  const handleExit = () => {
    navigate("/");
  };

  return (
    <header className="app-header">
      <div className="left" onClick={handleExit}>
        QuizMania
      </div>

      <div className="right">
        {path.startsWith("/quiz") && (
          <button className="exit-btn" onClick={handleExit}>
            Exit Quiz
          </button>
        )}

        {path === "/result" && <span className="user-name">{userName}</span>}
      </div>
    </header>
  );
}
