import ResultCard from "./ResultCard";

function ResultList({ results, keyword, pdfUrl }) {
  return (
    <div className="card">
      <h2>Results</h2>

      {results.length === 0 ? (
        <p>No results found.</p>
      ) : (
        results.map((result, index) => (
          <ResultCard
              key={index}
              result={result}
              keyword={keyword}
              pdfUrl={pdfUrl}
            />
        ))
      )}
    </div>
  );
}

export default ResultList;