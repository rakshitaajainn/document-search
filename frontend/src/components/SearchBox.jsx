import { useState } from "react";

function SearchBox({ onSearch }) {
  const [keyword, setKeyword] = useState("");

  const handleSubmit = () => {
    if (!keyword.trim()) {
      return;
    }

    onSearch(keyword);
  };

  return (
    <div className="card">
      <h2>Search Document</h2>

      <input
        type="text"
        placeholder="Enter keyword"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />

      <button onClick={handleSubmit}>
        Search
      </button>
    </div>
  );
}

export default SearchBox;