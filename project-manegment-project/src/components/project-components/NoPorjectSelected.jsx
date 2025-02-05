import noProjectImg from '../../assets/no-projects.png';
import Button from '../html-components/Button';
export default function NoPorjectSelected({ onStartAddProject }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={noProjectImg}
        alt="An empty task list"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-700 my-4">
        No Project Selected
      </h2>
      <p className="text-stone-600 mb-4">
        Select a project or get started with a new one
      </p>
      <p className="text-stone-600 mb-4">
        <Button onClick={onStartAddProject}>Create new project</Button>
      </p>
    </div>
  );
}
