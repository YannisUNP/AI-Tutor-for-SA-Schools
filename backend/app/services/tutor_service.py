from app.core.supabase import get_supabase_client
import logging

logger = logging.getLogger(__name__)

def get_user_subjects(student_id: str):
    supabase = get_supabase_client()
    
    response = supabase.table("user_subjects")  \
        .select("subjects(name, id)")   \
        .eq("student_id", student_id)   \
        .execute()
        
    return response

def get_user_subject_topics(student_id: str, subject_id: int):
    #Returns all the appropriate subtopics for the student according to the student's grade. It will return all the subtopics of the student's grade and down
    supabase = get_supabase_client()
    
    profile = supabase.table("profiles").select("grade").eq("id", student_id).single().execute()
    grade = profile.data['grade']
    phase = "Senior" if grade <= 9 else "FET"
        
    topics = supabase.table("topics").select("id, name, description, phase").eq("subject_id", subject_id).ilike("phase", f"%{phase}%").execute()
    return topics.data

def get_subtopics_by_topic(topic_id: int):
    supabase = get_supabase_client()
    return supabase.table("subtopics").select("*").eq("topic_id", topic_id).execute().data

def get_session(session_id: int):
    supabase = get_supabase_client()
    return supabase.table("tutor_sessions").select("*").eq("id", session_id).execute()
    
def create_tutor_session(student_id: str, subject_id: int, title: str, topic_id: int | None = None):
    supabase = get_supabase_client()
    
    return supabase.table("tutor_sessions").insert(
        {
            "student_id" : student_id,
            "subject_id" : subject_id,
            "topic_id" : topic_id,
            "title" : title,
        }
    ).execute()
    
def get_student_sessions(id: str):
    supabase = get_supabase_client()
    return supabase.table("tutor_sessions").select("*").eq("student_id", id).order("last_accessed", desc=True).execute()

def get_session_messages(session_id: int):
    supabase = get_supabase_client()
    return supabase.table("tutor_messages").select("*").eq("session_id", session_id).order("created_at", desc=True).execute()

def delete_student_session(student_id: str, session_id: int):
    supabase = get_supabase_client()
    return supabase.table("tutor_sessions").delete().eq("student_id", student_id).eq("id", session_id).single().execute()
