from fastapi import APIRouter
from pydantic import BaseModel

from app.services.document_store import current_document
from app.services.keyword_search import search_keyword

router = APIRouter()


class SearchRequest(BaseModel):
    keyword: str


@router.post("/search")
def search(request: SearchRequest):

    # Check if any PDF has been uploaded
    if "pages" not in current_document:
        return {
            "message": "No document uploaded."
        }

    results = search_keyword(
        current_document["pages"],
        request.keyword
    )

    return {
        "keyword": request.keyword,
        "results": results
    }