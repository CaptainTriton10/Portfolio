import { useNavigate } from 'react-router';
import { BackButton } from '../components/LinkButtons';

function ProjectTransign() {
  let navigate = useNavigate();

  return (
    <div className="p-16 h-full bg-background">
      <BackButton />
      <div className="flex flex-col mt-16 h-120 gap-8">
        <h1 className="text-primary text-6xl font-bartle">Transign</h1>
        <p className="text-2xl w-[60%]">
          A GUI based python application for interpreting the American Sign Language alphabet
          through a webcam.
        </p>
      </div>
      {/* <div className="bg-accent mt-16 w-full h-0.5" /> */}
      <p className="text-2xl">
        Lorem ipsum dolor sit amet consectetur adipiscing elit vel. Officia voluptatum ad velit
        eiusmod culpa commodo quidem reprehenderit dolorem in sunt in. Est expedita adipiscing
        consequatur eu deserunt pariatur est rerum eligendi. Reprehenderit omnis culpa fugiat
        dignissimos nisi. Ipsum duis accusamus id et occaecat et facere sed culpa dolorum soluta.
        <br />
        <br />
        Proident maxime corrupti quo fuga quos ut quos. Id aut eligendi pariatur qui eos pariatur
        eum eu nisi. Aute dolor dolor fugiat assumenda quas nobis id velit laborum provident.
        <br />
        <br />
        Laborum eum aute consectetur sunt culpa cum et. Assumenda dolorem pariatur in dignissimos
        quod cumque qui aliquip est deserunt. Nulla laboris sunt eu distinctio deserunt similique
        est.
      </p>
    </div>
  );
}

export default ProjectTransign;
