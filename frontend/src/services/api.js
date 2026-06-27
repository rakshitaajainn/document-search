const API_BASE = "/api";

export async function uploadDocument(file) {
  const formData = new FormData();

  formData.append("file", file);

  const response = await fetch(`${API_BASE}/upload`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Upload failed");
  }

  return response.json();
}

export async function searchDocument(keyword) {
  const response = await fetch(`${API_BASE}/search`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      keyword,
    }),
  });

  if (!response.ok) {
    throw new Error("Search failed");
  }

  return response.json();
}