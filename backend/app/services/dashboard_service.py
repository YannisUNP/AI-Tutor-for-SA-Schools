from app.core.supabase import get_supabase_client
import logging

logger = logging.getLogger(__name__)

def dashboard_summary(user_id: str):
    supabase = get_supabase_client()
    
    profile = supabase.table("profiles").select("*").eq("id", user_id).execute()
    stats = supabase.table("user_statistics").select("*").eq("user_id", user_id).execute()
    
    return {
        "user": profile.data,
        "stats": stats.data
    }
    

    
    
    