function ResultCard({ result, keyword, onOpenPage }) {
  const highlightText = (text) => {
    if (!keyword) return text;

    const regex = new RegExp(`(${keyword})`, "gi");

    const parts = text.split(regex);

    return parts.map((part, index) =>
      part.toLowerCase() === keyword.toLowerCase() ? (
        <mark key={index}>{part}</mark>
      ) : (
        part
      )
    );
  };

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "15px",
        marginTop: "15px",
      }}
    >
      <h3>📄 Page {result.page}</h3>

      <p>
        <strong>Matches:</strong> {result.count}
      </p>

      <p>{highlightText(result.snippet)}</p>

      <button
          onClick={() => onOpenPage(result.page)}
    >
        Open
      </button>
    </div>
  );
}

export default ResultCard;