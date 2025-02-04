import { useRef, useImperativeHandle } from 'react';
import { createPortal } from 'react-dom';

export default function ResultModal({ ref, remainingTime, targetTime, onReset }) {
  const dialog = useRef();
  const formatedRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  const userLost = remainingTime <= 0;
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      ref={dialog}
      className="result-modal"
      onClose={onReset}
    >
      {userLost && <h2>You lost</h2>}
      {!userLost && <h2>Your score: {score}</h2>}
      <p>
        The target tim was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with <strong>{formatedRemainingTime} seconds left.</strong>
      </p>
      <form
        method="dialog"
        onSubmit={onReset}
      >
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById('modal')
  );
}

// import { forwardRef } from 'react';

// const ResultModal = forwardRef(function ResultModal({ result, targetTime, ref }) {
//   return (
//     <dialog
//       ref={ref}
//       className="reult-modal"
//     >
//       <h2>You {result}</h2>
//       <p>
//         The target tim was <strong>{targetTime} seconds.</strong>
//       </p>
//       <p>
//         You stopped the timer with <strong>{targetTime} seconds left.</strong>
//       </p>
//       <form method="dialog">
//         <button>Close</button>
//       </form>
//     </dialog>
//   );
// });
// export default ResultModal;
