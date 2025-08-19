import './main.css';
import Onsale from '../../components/OnSale/Onsale';
import Justforyou from '../../components/JustForYou/Justforyou';

const Main = () => {
  return (
    <div className='main-content-row'>
      <div className='items-main-container'>
        <Onsale />
        <div className='jfy-container'>
          <Justforyou showHeader={true} />
        </div>
      </div>
    </div>
  );
};

export default Main;
