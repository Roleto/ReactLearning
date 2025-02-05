import { useRef } from 'react';
import Input from '../html-components/Input';
import Modal from '../html-components/Modal';
import ErrorModal from '../html-components/ErrorModal';

export default function NewProject({ onAdd, onCancel }) {
  const title = useRef();
  const desc = useRef();
  const date = useRef();
  const modalRef = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDesc = desc.current.value;
    const enteredDate = date.current.value;

    if (
      enteredTitle.trim() === '' ||
      enteredDesc.trim() === '' ||
      enteredDate.trim() === ''
    ) {
      modalRef.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDesc,
      dueDate: enteredDate,
    });
  }
  return (
    <>
      <ErrorModal ref={modalRef} buttonCaption="Okay" />
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              onClick={onCancel}
              className="text-stone-800 hover:text-stone-950"
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={title} label="Title" />
          <Input ref={desc} label="Description" isTextarea />
          <Input type="date" ref={date} label="Due Date" />
        </div>
      </div>
    </>
  );
}
