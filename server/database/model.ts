const { Pool } = require('pg')

const PG_URI = 'postgres://gkbyzbtn:NrAaRi_BOpokysTQT_Tx7vHxbXuf9Cwy@suleiman.db.elephantsql.com/gkbyzbtn'

const pool = new Pool({
    connectionString: PG_URI
})


module.exports = {
    query: (text: string, params: string[], callback: () => void ): string => {
        console.log('expected query', text)
        return pool.query(text, params, callback)
    }
}

/* CREATE TABLE articles (
    id SERIAL PRIMARY KEY
    title VARCHAR
    content VARCHAR
    author VARCHAR
) */