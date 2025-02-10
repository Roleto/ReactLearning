import { useCallback, useState } from 'react';
import QUESTIONS from './question';

import Question from './Question.jsx';
import Summary from '../summary-components/Summary.jsx';

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
    return <Summary anserws={userAnswers} />;
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
