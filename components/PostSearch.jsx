'use client';

import { setFilterData } from '@/redux/filterSlice';
import { selectFilter } from '@/redux/selectors';

import { useDispatch, useSelector } from 'react-redux';

const PostSearch =   () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <form className='search-form'>
      <input
        type="search"
        placeholder="search"
        value={filter}
        onChange={(e) => {
          dispatch(setFilterData(e.currentTarget.value));
        }}
      />
    </form>
  );
};

export { PostSearch };
