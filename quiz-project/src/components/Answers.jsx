export default function Answers() {
  return (
    <ul id="answers">
      {shuffledAnswers.current.map((answer, index) => {
        const isSelected = userAnswers[userAnswers.length - 1] === answer;
        let cssClasses = '';
        if (answerState === 'answered' && isSelected) {
          cssClasses = 'selected';
          console.log(cssClasses);
        }

        if (
          (answerState === 'wrong' || answerState === 'correct') &&
          isSelected
        ) {
          console.log(cssClasses);
          cssClasses = answerState;
        }

        return (
          <li className="answer" key={index}>
            <button
              onClick={() => HandleSelectAnswer(answer)}
              className={cssClasses}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
