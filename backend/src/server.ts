import express, { Request, Response } from 'express';
import pg from 'pg';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json()); // Essential middleware to read JSON data sent from the frontend

const pool = new pg.Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'student_db',
    password: 'admin123',
    port: 5432,
});

// TEST 1: Diagnostic endpoint to check server availability
app.get('/api/test', (req: Request, res: Response) => {
    res.json({ message: "Linux server is alive!" });
});

// TEST 2: CREATE data endpoint (Saves a user to the database)
app.post('/api/users', async (req: Request, res: Response) => {
    try {
        const { name, email } = req.body; // Extract user data sent from the web client
        
        // Secure SQL query using placeholders ($1, $2) to prevent SQL Injection
        const queryText = 'INSERT INTO users(name, email) VALUES($1, $2) RETURNING *;';
        const values = [name, email];
        
        const result = await pool.query(queryText, values);
        
        res.status(201).json({
            status: "Success",
            message: "User saved to PostgreSQL database!",
            data: result.rows[0]
        });
    } catch (err: any) {
        console.error("❌ SQL insertion error:", err.message);
        res.status(500).json({ error: "Failed to save user data." });
    }
});

// TEST 3: READ data endpoint (Fetches all users out of the database)
app.get('/api/users', async (req: Request, res: Response) => {2
    try {
        const result = await pool.query('SELECT * FROM users ORDER BY id DESC;');
        res.json({ status: "Success", users: result.rows });
    } catch (err: any) {
        console.error("❌ SQL selection error:", err.message);
        res.status(500).json({ error: "Failed to fetch user profiles." });
    }
});

app.listen(5000, () => {
    console.log("🚀 Advanced TypeScript Server running on port 5000!");
});
