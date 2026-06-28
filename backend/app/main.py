from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware

from app.routes.home import router as home_router
from app.routes.upload import router as upload_router
from app.routes.search import router as search_router

app = FastAPI(
    title="Document Search API",
    version="1.0.0"
)

print("=" * 50)
print("MAIN.PY IS LOADED")
print("=" * 50)

# Allow requests from the React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Serve uploaded PDFs
app.mount("/uploads", StaticFiles(directory="uploads"), name="uploads")

# Register routes
app.include_router(home_router)
app.include_router(upload_router)
app.include_router(search_router)