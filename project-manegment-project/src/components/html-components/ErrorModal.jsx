import Modal from './Modal';

export default function ErrorModal({ ref, buttonCaption }) {
  return (
    <Modal ref={ref} buttonCaption={buttonCaption}>
      <h2 className="text-xl font-bold text-stone-500 my-4">Invalid Input</h2>
      <p className="text-stone-400 mb-4">
        Oops ... looks like you forget to enter a value
      </p>
      <p className="text-stone-400 mb-4">
        Please make sure you provide a valid value for every input field.
      </p>
    </Modal>
  );
}
