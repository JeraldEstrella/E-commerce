import './search.css';
import Filter from './../../components/filter/Filter';
import Justforyou from '../../components/JustForYou/Justforyou';
import Advertisement from './../../components/advertisement/Advertisement';

const Search = () => {
  return (
    <div className='search-page-container'>
      <aside className='filter-sidebar'>
        <Filter />
      </aside>
      <main className='search-results'>
        <div className='search-header'>
          <div className='text-header'>
            <h1>Search Results</h1>
            <p>Found 120 products</p>
          </div>
          <div className='sort-container'>
            <label htmlFor='sort-dropdown' className='visually-hidden'>
              Sort Price
            </label>
            <select id='sort-dropdown' className='dropdown-input'>
              <option value=''>Price</option>
              <option value='option1'>Option 1</option>
              <option value='option2'>Option 2</option>
            </select>
          </div>
        </div>
        <Justforyou showHeader={false} />
      </main>
      <div className='advertisement-container'>
        <Advertisement />
      </div>
    </div>
  );
};

export default Search;
