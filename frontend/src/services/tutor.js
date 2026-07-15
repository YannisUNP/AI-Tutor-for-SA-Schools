import { supabase } from "../lib/supabaseClient";

export const getSubjects = async (id) => {
    const result = await fetch(`http://localhost:8000/api/tutor/subjects?student_id=${id}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });

    if (!result.ok) {
        const errorText = await result.text();
        throw new Error(`Failed to get student's subjects from backend: ${errorText}`);
    }

    return await result.json();
}

export const getTopics = async (id, subject_id) => {
    const result = await fetch(`http://localhost:8000/api/tutor/topics?student_id=${id}&subject_id=${subject_id}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });

    if (!result.ok) {
        const errorText = await result.text();
        throw new Error(`Failed to get subject's topics from backend: ${errorText}`);
    }

    return await result.json();
}

export const getSubtopics = async (topic_id) => {
    const result = await fetch(`http://localhost:8000/api/tutor/subtopics?topic_id=${topic_id}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });

    if (!result.ok) {
        const errorText = await result.text();
        throw new Error(`Failed to get topic's subtopics from backend: ${errorText}`);
    }

    return await result.json();
}

export const getSessions = async (studentId) => {
    const result = await fetch(`http://localhost:8000/api/tutor/get-sessions?student_id=${studentId}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });

    if (!result.ok) {
        const errorText = await result.text();
        throw new Error(`Failed to get student's sessions from backend: ${errorText}`);
    }

    return await result.json();
}

export const getSession = async (sessionId) => {
    const result = await fetch(`http://localhost:8000/api/tutor/get-session?session_id=${sessionId}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    });

    if (!result.ok) {
        const errorText = await result.text();
        throw new Error(`Failed to get student's session from backend: ${errorText}`);
    }

    return await result.json();
}

export const createSession = async (studentId, subjectId, title, topicId) => {
    //console.log("Title: ", title , " and topicId: ", topicId, " and subjectID: ", subjectId);
    const result = await fetch(`http://localhost:8000/api/tutor/create-session`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            student_id: studentId,
            subject_id: subjectId,
            title,
            topic_id: topicId || null
        }),
    });

    if (!result.ok) {
        const errorText = await result.text();
        throw new Error(`Failed to create new session in backend: ${errorText}`);
    }

    return result.json();
}

export const deleteSession = async (studentId, sessionId) => {
    const result = await fetch(`http://localhost:8000/api/tutor/delete-session`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            student_id: studentId,
            session_id: sessionId
        }),
    });
}

export const getMessages = async (sessionId) => {
    const result = await fetch(`http://localhost:8000/api/tutor/get-messages?session_id=${sessionId}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });

    if (!result.ok) {
        const errorText = await result.text();
        throw new Error(`Failed to get student's session messages from backend: ${errorText}`);
    }

    return await result.json();
}

