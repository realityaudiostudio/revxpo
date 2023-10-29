import Homepg from './components/Homepg';
import Legends from './components/Legends';
import './App.css'; // Import the CSS file correctly
import Ticket from './components/Ticket';
import Contact from './components/Contact';
import About from './components/About';
import Foots from './components/Foots';

function App() {
  return (
    <div>
      <Homepg></Homepg>
      <Legends></Legends>
      <Ticket></Ticket>
      <Contact></Contact>
      <About></About>
      <Foots></Foots>
    </div>
  );
}

export default App;
