from fastapi import APIRouter, UploadFile, File
from pathlib import Path
import shutil

router = APIRouter()

# Folder where uploaded PDFs will be stored
UPLOAD_FOLDER = Path("uploads")
UPLOAD_FOLDER.mkdir(exist_ok=True)


@router.post("/upload")
async def upload_pdf(file: UploadFile = File(...)):
    # Create the full file path
    file_path = UPLOAD_FOLDER / file.filename

    # Save the uploaded file
    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    return {
        "filename": file.filename,
        "message": "PDF uploaded successfully",
        "path": str(file_path)
    }