const sqlite3 = require('sqlite3').verbose();

// Initialize SQLite database
const db = new sqlite3.Database('./database.db', (err) => {
    if (err) {
        console.error('Error opening database: ' + err.message);
    } else {
        console.log('Connected to the SQLite database.');
    }
});

// Create Users Table if it doesn't exist
db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL UNIQUE,
    email TEXT NOT NULL UNIQUE,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);`, (err) => {
    if (err) {
        console.error('Error creating users table: ' + err.message);
    }
});

// Create Messages Table if it doesn't exist
db.run(`CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    message TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users (id)
);`, (err) => {
    if (err) {
        console.error('Error creating messages table: ' + err.message);
    }
});

// Helper function to add user
function addUser(username, email) {
    db.run(`INSERT INTO users (username, email) VALUES (?, ?)`, [username, email], function(err) {
        if (err) {
            console.error('Error adding user: ' + err.message);
        } else {
            console.log(`User added with ID: ${this.lastID}`);
        }
    });
}

// Helper function to add message
function addMessage(userId, message) {
    db.run(`INSERT INTO messages (user_id, message) VALUES (?, ?)`, [userId, message], function(err) {
        if (err) {
            console.error('Error adding message: ' + err.message);
        } else {
            console.log(`Message added with ID: ${this.lastID}`);
        }
    });
}

// Export functions
module.exports = { db, addUser, addMessage };