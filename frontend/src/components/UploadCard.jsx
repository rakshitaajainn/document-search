import { useState } from "react";
import { uploadDocument } from "../services/api";

function UploadCard() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [status, setStatus] = useState("");

  // Runs when user selects a PDF
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setStatus("");
  };

  // Runs when Upload button is clicked
  const handleUpload = async () => {
    if (!selectedFile) {
      setStatus("Please select a PDF first.");
      return;
    }

    try {
      setStatus("Uploading...");

      const result = await uploadDocument(selectedFile);

      setStatus(result.message);
    } catch (error) {
      console.error(error);
      setStatus("Upload failed.");
    }
  };

  return (
    <div className="card">
      <h2>Upload Document</h2>

      <input
        type="file"
        accept=".pdf"
        onChange={handleFileChange}
      />

      <p>
        <strong>Selected File:</strong>{" "}
        {selectedFile ? selectedFile.name : "No file selected"}
      </p>

      <button onClick={handleUpload}>
        Upload
      </button>

      {status && (
        <p
          style={{
            marginTop: "15px",
            color: status === "Upload failed." ? "red" : "green",
          }}
        >
          {status}
        </p>
      )}
    </div>
  );
}

export default UploadCard;