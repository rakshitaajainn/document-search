from fastapi.staticfiles import StaticFiles
from fastapi import FastAPI

from app.routes.home import router as home_router
from app.routes.upload import router as upload_router
from app.routes.search import router as search_router

app = FastAPI(
    title="Document Search API",
    version="1.0.0"
)
app.mount("/uploads", StaticFiles(directory="uploads"), name="uploads")

app.include_router(home_router)
app.include_router(upload_router)
app.include_router(search_router)