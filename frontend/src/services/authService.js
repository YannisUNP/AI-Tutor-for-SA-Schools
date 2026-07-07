import { supabase } from '../lib/supabaseClient';

export const completeUser = async ({ id, grade, curriculum, province, school, subjects }) => {
    const res = await fetch('http://localhost:8000/api/users/complete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            id,
            grade,
            curriculum,
            province,
            school,
            subjects,
        }),
    });

    if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`Failed to complete profile to backend: ${errorText}`);
    }

    return res.json();
};

export const getCurrentUserId = async () => {
    const { data: { session }, error: sessionError } = await supabase.auth.getSession();

    if (sessionError) {
        throw sessionError;
    }

    if (session?.user?.id) {
        return session.user.id;
    }

    const { data: { user }, error: userError } = await supabase.auth.getUser();

    if (userError) {
        throw userError;
    }

    return user?.id ?? null;
};

export const registerUser = async ({ firstName, surname, email, password }) => {
    const { data, error: authError } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: { first_name: firstName, surname },
        },
    });

    if (authError) {
        throw authError;
    }

    if (!data?.user) {
        throw new Error('Supabase did not return a user. Please try again.');
    }

    const res = await fetch('http://localhost:8000/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            id: data.user.id,
            first_name: firstName,
            surname,
            email,
        }),
    });

    if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`Failed to save profile to backend: ${errorText}`);
    }

    return data;
};

export const loginUser = async ({ email, password }) => {
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error) {
        throw new Error(error.message || 'Login failed. Please try again.');
    }

    return data;
};

