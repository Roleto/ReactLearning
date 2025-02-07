import { useCallback, useState } from 'react';
import QUESTIONS from './question';
import quizImg from '../../assets/quiz-complete.png';
import QuizProgress from './QuizProgress';
export default function Quiz() {
  const [{ userAnswers }, setState] = useState({
    userAnswers: [],
  });
  const activeQuestionIndex = userAnswers.length;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const HandleSelectAnswer = useCallback(function HandleSelectAnswer(
    selectedAnser
  ) {
    setState((prevState) => {
      return {
        ...prevState,
        userAnswers: [...prevState.userAnswers, selectedAnser],
      };
    });
  },
  []);

  const handleSKipAnswer = useCallback(
    () => HandleSelectAnswer(null),
    [HandleSelectAnswer]
  );
  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={quizImg} />
        <h2>Quiz Completed</h2>
      </div>
    );
  }
  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);

  return (
    <div id="quiz">
      <div id="question">
        <QuizProgress
          key={activeQuestionIndex}
          timout={10000}
          onTimeOut={handleSKipAnswer}
        />
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((answer, index) => (
            <li className="answer" key={index}>
              <button onClick={() => handleSelectAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
