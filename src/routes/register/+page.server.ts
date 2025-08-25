import type { Actions, PageServerLoad } from "./$types";
import * as db from '$lib/server/db';
import { fail, redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ cookies }) => {
    const user = await db.getUserFromSession(cookies.get('sessionid'));
    return { user };
}

const register = async ({ cookies, request }: any) => {
    const data = await request.formData();
    const email = data.get('username');
    const password = data.get('password');
    if (!email) {
        return fail(400, { email, missing: true });
    }
    let existing = await db.getUser(email);
    if (existing) {
        return fail(400, { error: 'User already exists' });
    }
    const hashedPassword = await db.hashPassword(password);;
    const user = await db.createUser(email, hashedPassword);
    const sessionId = await db.createSession(user);
    cookies.set('sessionid', sessionId, {
        path: '/',
        httpOnly: true,
        sameSite: 'strict',
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 7 // 1 week
    });
    throw redirect(303, '/');

}

export const actions: Actions = { register };
