import Navlinks from './components/NavigationLinks/Navlinks.tsx';
import Main from './route/main/Main';
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
