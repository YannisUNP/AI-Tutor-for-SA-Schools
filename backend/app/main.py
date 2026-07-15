from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import logging

from app.api.users import router as users_router
from app.api.dashboard import router as dashboard_router
from app.api.tutor import router as tutor_router

# Configure basic structured logging for the application
logging.basicConfig(level=logging.INFO, format="%(asctime)s %(levelname)s %(name)s: %(message)s")
logger = logging.getLogger(__name__)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:3001"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(users_router, prefix="/api")
app.include_router(dashboard_router, prefix="/api")
app.include_router(tutor_router, prefix="/api")

@app.on_event("startup")
async def startup_event():
    logger.info("Starting StudyMate backend application")
