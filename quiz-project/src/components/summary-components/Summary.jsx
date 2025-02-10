import SummaryStat from './SummaryStat';
import quizImg from '../../assets/quiz-complete.png';
import QUESTIONS from '../quiz-component/question.js';
export default function Summary({ anserws }) {
  const skippedAnsers = anserws.filter((answer) => answer === null);
  const corrrectAnswers = anserws.filter(
    (answer, index) => answer === QUESTIONS[index].answers[0]
  );

  const skippedAnswersShare = Math.round(
    (skippedAnsers.length / anserws.length) * 100
  );
  const correctAnswersShare = Math.round(
    (corrrectAnswers.length / anserws.length) * 100
  );

  const wrongAnswersShare = 100 - skippedAnswersShare - correctAnswersShare;

  return (
    <div id="summary">
      <img src={quizImg} alt="Trophy icon" />
      <h2>Quiz Completed</h2>
      <div id="summary-stats">
        <SummaryStat number={skippedAnswersShare} text="skipped" />
        <SummaryStat number={correctAnswersShare} text="answered correctly" />
        <SummaryStat number={wrongAnswersShare} text="answered incorrectly" />
      </div>
      <ol>
        {anserws.map((anserw, index) => {
          let cssClass = 'user-answer';

          if (anserw === null) {
            cssClass += ' skipped';
          } else if (anserw === QUESTIONS[index].answers[0]) {
            cssClass += ' correct';
          } else {
            cssClass += ' wrong';
          }
          return (
            <li key={anserw ?? 'Skipped' + index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className={cssClass}>{anserw ?? 'Skipped'}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
