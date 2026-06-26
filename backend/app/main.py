from fastapi import FastAPI
from app.routes.home import router as home_router

app = FastAPI(
    title="Document Search API",
    version="1.0.0"
)

app.include_router(home_router)