from fastapi import APIRouter, UploadFile, File
from pathlib import Path
import shutil

from app.services.pdf_reader import extract_pdf_text
from app.services.document_store import current_document

router = APIRouter()

UPLOAD_FOLDER = Path("uploads")
UPLOAD_FOLDER.mkdir(exist_ok=True)


@router.post("/upload")
async def upload_pdf(file: UploadFile = File(...)):

    file_path = UPLOAD_FOLDER / file.filename

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    extracted_text = extract_pdf_text(file_path)

    current_document["filename"] = file.filename
    current_document["pages"] = extracted_text

    return {
        "message": "PDF uploaded successfully",
        "filename": file.filename,
        "pages": len(extracted_text)
    }