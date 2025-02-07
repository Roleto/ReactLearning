import { useCallback, useRef, useState } from 'react';
import QUESTIONS from './question';
import quizImg from '../../assets/quiz-complete.png';
import Question from './Question.jsx';

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const [answerState, setAnswerState] = useState('');
  const activeQuestionIndex =
    answerState === '' ? userAnswers.length : userAnswers.length - 1;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const HandleSelectAnswer = useCallback(
    function HandleSelectAnswer(selectedAnser) {
      setUserAnswers((prevState) => {
        return [...prevState, selectedAnser];
      });
      setAnswerState('answered');

      setTimeout(() => {
        if (selectedAnser == QUESTIONS[activeQuestionIndex].answers[0]) {
          setAnswerState('correct');
        } else {
          setAnswerState('wrong');
        }
        setTimeout(() => {
          setAnswerState('');
        }, 2000);
      }, 1000);
    },
    [activeQuestionIndex]
  );

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
        questionText={QUESTIONS[activeQuestionIndex].text}
        anserws={QUESTIONS[activeQuestionIndex].answers}
        onSelectAnswer={HandleSelectAnswer}
        selectedAnswer={userAnswers[userAnswers.length - 1]}
        answerState={answerState}
        onSkipAnswer={handleSKipAnswer}
      />
    </div>
  );
}
