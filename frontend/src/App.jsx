import UploadCard from "./components/UploadCard";
import SearchBox from "./components/SearchBox";
import ResultList from "./components/ResultList";

function App() {
  return (
    <div className="container">
      <h1>Document Search</h1>

      <p>
        Upload a PDF and search keywords instantly.
      </p>

      <UploadCard />

      <SearchBox />

      <ResultList />
    </div>
  );
}

export default App;