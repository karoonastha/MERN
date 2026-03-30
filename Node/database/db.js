import mysql from "mysql2";

const db = mysql.createConnection({
    host : "localhost",
    user :"root",
    password :"1234567890",
    database :"sus",
})

db.connect((err)=>{
    if(err) return console.log(err);
    return console.log("Database connected succesfully.")
});

export default db;


