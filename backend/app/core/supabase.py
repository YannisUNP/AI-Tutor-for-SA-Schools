import os
from pathlib import Path

from supabase import create_client


def _load_env_file():
    env_path = Path(__file__).resolve().parents[2] / ".env"
    if not env_path.exists():
        return

    for line in env_path.read_text(encoding="utf-8").splitlines():
        line = line.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue

        key, value = line.split("=", 1)
        key = key.strip()
        value = value.strip().strip('"').strip("'")
        os.environ.setdefault(key, value)


_load_env_file()


def get_supabase_client():
    supabase_url = os.getenv("SUPABASE_URL")
    supabase_key = (
        os.getenv("SUPABASE_ROLE_KEY")
        or os.getenv("SUPABASE_SERVICE_ROLE_KEY")
        or os.getenv("SUPABASE_SECRET_KEY")
    )

    if not supabase_url or not supabase_key:
        raise RuntimeError(
            "SUPABASE_URL and one of SUPABASE_ROLE_KEY/SUPABASE_SERVICE_ROLE_KEY/SUPABASE_SECRET_KEY must be set"
        )

    return create_client(supabase_url, supabase_key)
