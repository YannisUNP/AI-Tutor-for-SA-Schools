from app.core.supabase import get_supabase_client


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
