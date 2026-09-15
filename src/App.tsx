import AboutMe from './components/AboutMe';
import Landing from './components/Landing';

function App() {
  return (
    <div className="p-16 bg-background">
      <Landing />
      <div className="bg-accent w-full h-0.5" />
      <AboutMe />
    </div>
  );
}

export default App;
