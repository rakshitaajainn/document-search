import ResultCard from "./ResultCard";

function ResultList({ results, keyword, onOpenPage }) {
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
              onOpenPage={onOpenPage}
            />
        ))
      )}
    </div>
  );
}

export default ResultList;