import { useCallback, useRef, useState } from 'react';
import QUESTIONS from './question';
import quizImg from '../../assets/quiz-complete.png';
import QuizProgress from './QuizProgress';
export default function Quiz() {
  const shuffledAnswers = useRef();
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
  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...QUESTIONS[activeQuestionIndex].answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }

  return (
    <div id="quiz">
      <div id="question">
        <QuizProgress
          key={activeQuestionIndex}
          timout={10000}
          onTimeOut={handleSKipAnswer}
        />
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
      </div>
    </div>
  );
}
