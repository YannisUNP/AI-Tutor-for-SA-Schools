from fastapi import APIRouter, HTTPException, Body
from pydantic import BaseModel
import logging

from app.services.tutor_service import get_user_subjects, get_user_subject_topics, get_subtopics_by_topic, create_tutor_session, get_student_sessions, delete_student_session, get_session_messages, get_session

class CreateSessionRequest(BaseModel):
    student_id: str
    subject_id: int
    title: str
    topic_id: int | None = None

logger = logging.getLogger(__name__)
router = APIRouter()

@router.get("/tutor/subjects")
async def get_subjects(student_id: str):
    try:
        logger.info("Fetching subjects for id: %s", student_id)
        res = get_user_subjects(student_id)
        return {"status": "success", "data":res}
    except Exception as exc:
        raise HTTPException(status_code=400, detail=str(exc)) from exc

@router.get("/tutor/topics")
async def get_topics(student_id: str, subject_id: int):
    try:
        logger.info("Fetching topics for student id %s and subject id %i ", student_id, subject_id)
        res = get_user_subject_topics(student_id, subject_id)
        return {"status": "success", "data":res}
    except Exception as exc:
        raise HTTPException(status_code=400, detail=str(exc)) from exc
    
@router.get("/tutor/subtopics")
async def get_subtopics(topic_id: int):
    try:
        logger.info("Fetching subtopics for topic id: %i", topic_id)
        res = get_subtopics_by_topic(topic_id)
        return {"status": "success", "data": res}
    except Exception as exc:
        raise HTTPException(status_code=400, detail=str(exc)) from exc
    
@router.post("/tutor/create-session")
async def create_session(payload: CreateSessionRequest):
    try:
        logger.info("Creating session for student id: %s", payload.student_id)
        res = create_tutor_session(payload.student_id, payload.subject_id, payload.title, payload.topic_id)
        return {"status": "success", "data": res}
    except Exception as exc:
        raise HTTPException(status_code=400, detail=str(exc)) from exc
    
@router.get("/tutor/get-sessions")
async def get_sessions(student_id: str):
    try:
        logger.info("Getting sessions for student id: %s", student_id)
        res = get_student_sessions(student_id)
        return {"status": "Success", "data":res}
    except Exception as exc:
        raise HTTPException(status_code=400, detail=str(exc)) from exc
    
@router.delete("/tutor/delete-session")
async def delete_session(student_id: str = Body(...), session_id: int = Body(...)):
    try:
        logger.info("Deleting session for student id: %s", student_id)
        delete_student_session(student_id, session_id)
        return {"status": "Success", "message": "Session Deleted"}
    except Exception as exc:
        logger.error("Error deleting session: %s", str(exc))
        raise HTTPException(status_code=400, detail=str(exc))
    
@router.get("/tutor/get-messages")
async def get_messages(session_id: int):
    try:
        logger.info("Getting messages from session id: %s", session_id)
        res = get_session_messages(session_id)
        return{"status":"success", "data": res}
    except Exception as exc:
        raise HTTPException(status_code=400, detail=str(exc)) from exc

@router.get("/tutor/get-session")
async def getSession(session_id: int):
    try:
        logger.info("Getting session information from id: %s", session_id)
        res = get_session(session_id)
        return{"status":"success", "data": res}
    except Exception as exc:
        raise HTTPException(status_code=400, detail=str(exc)) from exc
        