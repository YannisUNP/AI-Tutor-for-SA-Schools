from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

from app.services.user_service import create_user_profile

router = APIRouter()


class UserProfile(BaseModel):
    id: str
    first_name: str
    surname: str
    email: str


@router.post("/users", status_code=201)
async def create_profile(profile: UserProfile):
    try:
        print(f"Creating user profile: {profile}")
        result = create_user_profile(profile)
        return {"status": "success", "data": result.data}
    except Exception as exc:
        raise HTTPException(status_code=400, detail=str(exc)) from exc
