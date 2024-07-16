
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Tools from './components/Tools';

function App() {
  return (
    <div className='w-full h-full bg-gradient-to-r from-white to-fuchsia-500'>
      
        <Header />
        <About />
        <Tools />
    </div>
  );
}

export default App;
