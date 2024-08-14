import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchOrder() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;

    navigate(`/order/${query}`);
    setQuery('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search order"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="h-6 w-28 rounded-md bg-yellow-100 p-4 transition-all duration-300 placeholder:text-stone-900 focus:outline-none focus:ring-yellow-400 focus:ring-opacity-50 sm:w-60 sm:focus:w-64"
      />
    </form>
  );
}

export default SearchOrder;
