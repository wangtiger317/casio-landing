import type { LayoutServerLoad } from './$types';
import * as db from '$lib/server/db';

export const load: LayoutServerLoad = async ({ cookies }) => {
    const user = await db.getUserFromSession(cookies.get('sessionid'));
    return { user };
};