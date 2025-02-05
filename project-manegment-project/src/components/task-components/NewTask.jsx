import { useRef, useState } from 'react';
import ErrorModal from '../html-components/ErrorModal';

export default function NewTask({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState('');
  const modalRef = useRef();

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }
  function handleClick() {
    if (enteredTask.trim() === '') {
      modalRef.current.open();
      return;
    }
    onAdd(enteredTask);
    setEnteredTask('');
  }
  return (
    <>
      <ErrorModal ref={modalRef} buttonCaption="Okay" />
      <div className="flex items-center gap-4">
        <input
          onChange={handleChange}
          value={enteredTask}
          className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        />
        <button
          onClick={handleClick}
          className="text-stone-700 hover:text-stone-950"
        >
          Add Task
        </button>
      </div>
    </>
  );
}
