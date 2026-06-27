import { useState } from "react";

import UploadCard from "./components/UploadCard";
import SearchBox from "./components/SearchBox";
import ResultList from "./components/ResultList";

import { searchDocument } from "./services/api";

function App() {
  const [results, setResults] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [pdfUrl, setPdfUrl] = useState("");

  const handleUploadSuccess = (url) => {
    setPdfUrl(url);
  };

  const handleSearch = async (searchKeyword) => {
    try {
      const response = await searchDocument(searchKeyword);

      setKeyword(searchKeyword);
      setResults(response.results || []);
    } catch (error) {
      console.error(error);
      alert("Search failed.");
    }
  };

  return (
    <div className="container">
      <h1>Document Search</h1>

      <p>Upload a PDF and search keywords instantly.</p>

      <UploadCard onUploadSuccess={handleUploadSuccess} />

      <SearchBox onSearch={handleSearch} />

      <ResultList
        results={results}
        keyword={keyword}
        pdfUrl={pdfUrl}
      />
    </div>
  );
}

export default App;