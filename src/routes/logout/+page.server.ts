import type { Actions } from './$types';
import { redirect } from '@sveltejs/kit';

export const actions: Actions = {
    default: async ({ cookies }) => {
        // delete the session cookie
        cookies.delete('sessionid', { path: '/' });
        // redirect to homepage
        throw redirect(303, '/');
    }
};
