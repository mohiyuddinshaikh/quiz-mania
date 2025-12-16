# QuizMania 🎯

QuizMania is an interactive quiz platform where users can choose a topic, enter their name, and attempt a timed quiz. Each question is time-bound, and results are displayed at the end with a detailed breakdown of performance.

---

## 🛠 Setup & Installation

Follow the steps below to run the project locally:

```bash
git clone <repository-url>
cd quiz-mania
npm install
npm run dev
```

## 🧩 Problem Statement

The goal of this project is to build a quiz platform with the following behavior:

- Users can select a quiz topic and enter their name to start the quiz.
- Each question has a time limit (10 seconds in the current implementation, but configurable per question).
- Users can:
  - Select an option and press **Next** to submit an answer.
  - Skip a question by pressing **Next** without selecting any option.
- Users **cannot**:
  - Jump between questions.
  - Revisit or reattempt previous questions.
- If a question is not answered within the given time limit, it is automatically skipped.
- An answer is considered **valid only when** an option is selected **and** the **Next** button is pressed.
- After the quiz is completed:
  - Users see the total count of **correct**, **incorrect**, and **unanswered** questions.
  - The final score percentage is displayed.
- Users can restart the quiz from the results screen.

---

## ✅ Completed Features

- User form to collect basic details before starting the quiz
  - Includes proper validation and error messages
- Fully implemented quiz flow as described in the problem statement
- Timed questions with automatic skipping on timeout
- Result summary with performance breakdown and percentage
- UI implemented as per Figma designs (desktop)
- Responsive design (approximately 60% complete)

---

