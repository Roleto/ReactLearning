import { useCallback, useState } from 'react';
import QUESTIONS from './question';
import quizImg from '../../assets/quiz-complete.png';
import Question from './Question.jsx';

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const HandleSelectAnswer = useCallback(function HandleSelectAnswer(
    selectedAnser
  ) {
    setUserAnswers((prevState) => {
      return [...prevState, selectedAnser];
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

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={HandleSelectAnswer}
        onSkipAnswer={handleSKipAnswer}
      />
    </div>
  );
}
