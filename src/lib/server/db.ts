import Database from "better-sqlite3";
import crypto from "crypto";
const db = new Database("sqlite.db");
db.exec(`
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    username TEXT DEFAULT 'New User'
);

CREATE TABLE IF NOT EXISTS sessions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    session_id TEXT UNIQUE NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
);
`);
const ITERATIONS = 100000; // security vs. performance trade-off
const KEYLEN = 64;
const DIGEST = "sha512";
export function getUser(email: string) {
    const stmt = db.prepare("SELECT * FROM users WHERE email = ?");
    return stmt.get(email);
}

export function createUser(email: string, password: string) {
    const usernameFromEmail = email.split('@')[0];

    const stmt = db.prepare(
        "INSERT INTO users (email, password, username) VALUES (?, ?, ?)"
    );
    const info = stmt.run(email, password, usernameFromEmail);
    return getUser(email); // return created user
}

export function createSession(user: any) {
    const sessionId = crypto.randomBytes(32).toString("hex");
    const stmt = db.prepare("INSERT INTO sessions (user_id, session_id) VALUES (?, ?)");
    stmt.run(user.id, sessionId);
    return sessionId;
}

export function hashPassword(password: string, salt?: string) {
    salt = salt || crypto.randomBytes(16).toString("hex");
    const hash = crypto
        .pbkdf2Sync(password, salt, ITERATIONS, KEYLEN, DIGEST)
        .toString("hex");
    return `${salt}:${hash}`; // store salt + hash together
}
export function getUserFromSession(sessionId?: string) {
    if (!sessionId) return null;
    const stmt = db.prepare(`
        SELECT u.* FROM sessions s
        JOIN users u ON s.user_id = u.id
        WHERE s.session_id = ?
    `);
    return stmt.get(sessionId);
}