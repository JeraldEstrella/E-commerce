import { Zap, Calendar } from 'lucide-react';
import {
  categoryOptions,
  useCategoryStore,
} from '../../lib/zustand/selectedCategory';
import './navlinks.css';

const Navlinks: React.FC = () => {
  const { category, setCategory } = useCategoryStore();

  const handleCategoryChange = (
    event: React.MouseEvent<HTMLAnchorElement>,
    value: string
  ) => {
    event.preventDefault();
    setCategory(value);
  };

  return (
    <div className='secondary-nav'>
      <div className='navlinks'>
        {categoryOptions.map((cat) => {
          const IconComponent = cat.icon;

          return (
            <a
              href={`/`}
              className='navlink'
              key={cat.value}
              onClick={(event) => handleCategoryChange(event, cat.value)}
            >
              <IconComponent size={18} />
              <span>{cat.label}</span>
            </a>
          );
        })}
      </div>

      <div className='event'>
        <div className='event-badge'>HOT</div>

        <div className='event-header'>
          <Zap size={14} className='event-icon' />
          <span className='event-text'>Today's Deals</span>
        </div>

        <div className='event-date'>
          <Calendar size={12} className='date-icon' />
          <span>Aug 1 - Aug 31</span>
        </div>
      </div>
    </div>
  );
};

export default Navlinks;
