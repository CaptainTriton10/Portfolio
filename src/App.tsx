import AboutMe from './components/AboutMe';
import Landing from './components/Landing';
import Projects from './components/Projects';

function App() {
  return (
    <div className="p-16 bg-background">
      <Landing />
      <div className="bg-accent w-full h-0.5" />
      <AboutMe />
      <div className="bg-accent mt-16 w-full h-0.5" />
      <Projects />
    </div>
  );
}

export default App;
