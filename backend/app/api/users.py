from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
import logging

from app.services.user_service import complete_user_profile, create_user_profile
logger = logging.getLogger(__name__)

router = APIRouter()


class UserProfile(BaseModel):
    id: str
    first_name: str
    surname: str
    email: str

class CompleteUserProfile(BaseModel):
    id: str
    grade: str
    curriculum: str
    province: str
    school: str
    subjects: list[str]


@router.post("/users", status_code=201)
async def create_profile(profile: UserProfile):
    try:
        logger.info("Creating user profile: %s", profile)
        result = create_user_profile(profile)
        return {"status": "success", "data": result.data}
    except Exception as exc:
        raise HTTPException(status_code=400, detail=str(exc)) from exc

@router.post("/users/complete", status_code=201)
async def complete_profile(profile: CompleteUserProfile):
    try:    
        logger.info("Completing user profile: %s", profile)
        result = complete_user_profile(profile)
        return {"status": "success", "data": result.data}
    except Exception as exc:
        raise HTTPException(status_code=400, detail=str(exc)) from exc
    