import { BrowserRouter } from 'react-router-dom';
import Stars from './components /canvas/Stars';
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Works,
} from './components ';

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-blue-900'>
        <div className="bg-[url('/portfolio2-bcg.jpg')] bg-cover bg-no-repeat bg-center ">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />

        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <Stars />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
