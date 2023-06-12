'use client';

import { useState } from 'react';

const PostSearch =   () => {
  const [search, setSearch] = useState('');

  return (
    <form>
      <input
        type="search"
        placeholder="search"
        value={value}
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export { PostSearch };
