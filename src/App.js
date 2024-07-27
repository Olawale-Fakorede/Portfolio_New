
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Tools from './components/Tools';
import Works from './components/Works';

function App() {
  return (
    <div className='w-full h-full bg-gradient-to-r from-white to-fuchsia-500'>
      
        <Header />
        <About />
        <Tools />
        <Works />
    </div>
  );
}

export default App;
