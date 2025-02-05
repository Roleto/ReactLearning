import { useState } from 'react';
import Button from './html-components/Button';
const dummyProject = {
  title: 'Proba Title',
  content: {},
};
export default function SideBar({
  projectList = [],
  onStartAddProject,
  onSelectProject,
  selecteProjectId,
}) {
  const [state, setState] = useState('');
  function AddProject(project) {
    projectList = { project, ...projectList };
    setState('asd');
  }
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl ">
      <h1 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h1>
      <div>
        <Button
          onClick={onStartAddProject}
          className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
        >
          Add Project
        </Button>
      </div>
      <ul className="mt-8">
        {projectList.map((project) => {
          let cssClases =
            'w-full text-left px-2 py-1 rounded-sm my-1  hover:text-stone-200 hover:bg-stone-800';
          if (project.id === selecteProjectId) {
            cssClases += ' bg-stone-800 text-stone-200';
          } else {
            cssClases += ' text-stone-400';
          }
          return (
            <li key={project.id}>
              <button
                onClick={() => onSelectProject(project.id)}
                className={cssClases}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
