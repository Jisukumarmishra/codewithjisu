import mysql from 'mysql2/promise';

// PlanetScale / MySQL connection pool
// DATABASE_URL format: mysql://user:password@host/database?ssl={"rejectUnauthorized":true}

let pool;

function getPool() {
  if (!pool) {
    if (!process.env.DATABASE_URL) {
      throw new Error(
        'DATABASE_URL is not set. Add it to your .env.local file.\n' +
        'Format: mysql://user:password@host/database?ssl={"rejectUnauthorized":true}'
      );
    }

    pool = mysql.createPool({
      uri: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: true },
      connectionLimit: 10,
      waitForConnections: true,
      queueLimit: 0,
    });
  }
  return pool;
}

/**
 * Execute a parameterized query.
 * @param {string} sql - SQL string with ? placeholders
 * @param {any[]}  params - Array of parameter values
 * @returns {Promise<any[]>} rows
 */
export async function query(sql, params = []) {
  const connection = await getPool().getConnection();
  try {
    const [rows] = await connection.execute(sql, params);
    return rows;
  } finally {
    connection.release();
  }
}
