from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
import logging

from app.services.dashboard_service import dashboard_summary

logger = logging.getLogger(__name__)
router = APIRouter()

@router.get("/dashboard/summary")
async def get_dashboard_summary(user_id: str):
    try:
        logger.info("Fetching dashboard summary for id: %s", user_id)
        res = dashboard_summary(user_id)
        return {"status": "success", "data":res}
    except Exception as exc:
        raise HTTPException(status_code=400, detail=str(exc)) from exc