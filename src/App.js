import './App.css';
import { Navigation } from './Navigation'
import AboutMe from './AboutMe'
import Timeline from './components/Timeline';
import PhotoCard from './components/PhotoCard';

function App() {
  return (
    <div class='card'>
      <AboutMe />
      {/* <PhotoCard image={require('./images/baby_megan.jpg')}/> */}
      {/* <Timeline /> */}
    </div>
  );
}

export default App;
