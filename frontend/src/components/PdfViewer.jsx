import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc =
  `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

function PdfViewer({ pdfUrl, page }) {
  if (!pdfUrl) {
    return (
      <div className="card">
        <h2>PDF Viewer</h2>
        <p>Upload a document and click Open to preview it here.</p>
      </div>
    );
  }

  return (
    <div className="card">
      <h2>PDF Viewer</h2>

      <Document
        file={`http://127.0.0.1:8000${pdfUrl}`}
        loading={<p>Loading PDF...</p>}
        error={<p>Unable to load PDF.</p>}
      >
        <Page
          pageNumber={page}
          width={750}
        />
      </Document>
    </div>
  );
}

export default PdfViewer;