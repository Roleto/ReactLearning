import Answers from './Answers';
import QuizProgress from './QuizProgress';

export default function Question({
  questionText,
  anserws,
  onSelectAnswer,
  selectedAnswer,
  answerState,
  onSkipAnswer,
}) {
  return (
    <div id="question">
      <QuizProgress timout={10000} onTimeOut={onSkipAnswer} />
      <h2>{questionText}</h2>
      <Answers
        answers={anserws}
        selectedAnswer={selectedAnswer}
        answerState={answerState}
        onSelect={onSelectAnswer}
      />
    </div>
  );
}
