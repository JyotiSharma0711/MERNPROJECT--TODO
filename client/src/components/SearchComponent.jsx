// components/SearchComponent.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAllTodos } from '../redux/actions/index';
import { ALL_TODOS} from '../redux/actions/type';

const SearchComponent = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async () => {
    try {
      const res = await getAllTodos(searchTerm); 
      dispatch({ type: 'ALL_TODOS', payload: res.data }); 
    } catch (error) {
      console.log('Error while searching todos:', error.message);
    }
  };

  return (
    <div>
      <input
        className='search'
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search Todos..."
      />
      <button onClick={handleSearch}><i class="fa fa-search"></i></button>
    </div>
  );
};

export default SearchComponent;
