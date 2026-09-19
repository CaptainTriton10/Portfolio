import { useNavigate } from 'react-router';
import LinkButton from './LinkButtons';

type ProjectTileProps = {
  title: string;
  clickCallback?: () => void;
};

function ProjectTile(props: ProjectTileProps) {
  return (
    <div className="w-full mb-16">
      {/* <h3 className="font-bartle text-6xl text-primary">{props.title}</h3> */}
      <LinkButton clickCallback={props.clickCallback} text={props.title} />
    </div>
  );
}

function Projects() {
  let navigate = useNavigate();

  return (
    <div className="mt-32">
      <h2 className="mb-32 text-6xl font-bartle text-primary">Projects</h2>
      <ProjectTile
        title="Transign"
        clickCallback={() => {
          navigate('/projects/transign');
        }}
      />
      <ProjectTile title="Photography" />
      <ProjectTile title="Project 3" />
    </div>
  );
}

export default Projects;
