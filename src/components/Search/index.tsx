import React, { useContext, useState } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';
import * as C from './styles';

let searchTimer: any = null;

const Search = () => {
  const { dispatch } = useContext(GlobalContext);

  const [inputValue, setInputValue] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    clearTimeout(searchTimer);
    setInputValue(e.target.value);

    searchTimer = setTimeout(() => {
      dispatch({
        type: 'TABLEREGISTERS_SET_INITIALFETCH',
        payload: {
          initialFetch: false
        }
      });
      dispatch({
        type: 'TABLEREGISTERS_SET_SEARCHQUERY',
        payload: {
          searchQuery: e.target.value
        }
      });
    }, 2000);
  }

  return (
    <C.Container>
      <input
        placeholder='Digite para buscar...'
        value={inputValue}
        onChange={handleSearch}
      />
    </C.Container>
  );
}

export default Search;
