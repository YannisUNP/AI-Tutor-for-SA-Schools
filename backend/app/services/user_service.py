from app.core.supabase import get_supabase_client
import logging

logger = logging.getLogger(__name__)


def create_user_profile(profile):
    supabase = get_supabase_client()

    return supabase.table("profiles").insert(
        {
            "id": profile.id,
            "first_name": profile.first_name,
            "surname": profile.surname,
            "email": profile.email,
        }
    ).execute()
    
def complete_user_profile(profile):
    supabase = get_supabase_client()
    # Update the existing profile row for the given user id with onboarding fields
    update_result = supabase.table("profiles").update(
        {
            "grade": profile.grade,
            "curriculum": profile.curriculum,
            "province": profile.province,
            "school": profile.school,
        }
    ).eq('id', profile.id).execute()
    
    # Call Postgres RPC to insert related subjects for the user
    rpc_result = supabase.rpc(
        "insert_user_subjects",
        {
            "p_user_id": profile.id,
            "p_subject_names": profile.subjects,
        }
    ).execute()

    return rpc_result

