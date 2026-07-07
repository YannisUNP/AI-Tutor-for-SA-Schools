import { supabase } from "../lib/supabaseClient";

export const dashboardSummary = async(id) =>{
    console.log("ID in question, ", id);
    const result = await fetch(`http://localhost:8000/api/dashboard/summary?user_id=${id}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });
    if (!result.ok) {
        const errorText = await result.text();
        throw new Error(`Failed to get dashboard summary from backend: ${errorText}`);
    }

    return await result.json();
}