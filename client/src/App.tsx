import Navlinks from './components/category/Navlinks.tsx';
import Main from './Route/Home/Main.tsx';
import './index.css';

const App = () => {
  return (
    <div className='root-container'>
      <div className='main-page'>
        <Navlinks />
        <Main />
      </div>
    </div>
  );
};

export default App;
