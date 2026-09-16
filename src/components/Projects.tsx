import { useNavigate } from 'react-router';

type ProjectTileProps = {
  title: string;
  clickCallback?: () => void;
};

function ProjectTile(props: ProjectTileProps) {
  return (
    <div className="w-full h-80">
      <h3 className="font-bartle text-6xl text-primary">{props.title}</h3>
      <p className="mt-8 text-4xl">A short description</p>
      <div
        className="w-full h-15 mt-8 bg-accent"
        onClick={() => {
          if (props.clickCallback) props.clickCallback();
        }}
      ></div>
      <div className="w-full h-0.5 mt-8 bg-accent"></div>
    </div>
  );
}

function Projects() {
  let navigate = useNavigate();

  return (
    <div className="mt-32">
      <ProjectTile
        title="Project 1"
        clickCallback={() => {
          navigate('/projects/transign');
        }}
      />
      <ProjectTile title="Project 2" />
      <ProjectTile title="Project 3" />
    </div>
  );
}

export default Projects;
