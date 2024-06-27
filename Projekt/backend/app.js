//diese js datei und test.db dient ausschließlich als informationsquelle, quasi nur zum abgucken
//hat nichts mit dem eigentlichen projekt zu tun
const sqlite3 = require('sqlite3').verbose();
let sql;

//connect to DB
const db = new sqlite3.Database('./test.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) return console.error(err.message);
});

const url = "https://dummyjson.com/quotes?limit=";

//get Data
async function getData(url, lmt) {
    let response = await fetch(url + lmt);
    let data = await response.json();
    let quotes = data.quotes;
    let keys = Object.keys(quotes[0]).join(",");
    console.log(keys);
    return [quotes, keys];
    console.log(data);
}
getData(url, 1);

//create table 
async function createTable(db, url) {
    let data = await getData(url, 1);
    db.run('CREATE TABLE quotes("+data[1]+");')
    db.close();
}
createTable(db, url);

//create table
//sql = 'CREATE TABLE users(id INTEGER PRIMARY KEY,first_name,last_name,username,password,email)';
//db.run(sql);

//drop table
//db.run("DROP TABLE users");

//insert rows into the table
async function insertRows(db, url, lmt) {
    let data = await getData(url, lmt);
    db.serialize(function () {
        let sql = "INSERT INTO quotes (" + data[1] + ") VALUES(";
        for (i in data[0]) {
            let values = Object.values(data[0][i]).join("','");
            let finalSQL = sql + "'" + values + "');";
            db.run(finalSQL);
            //console.log(finalSQL);
        }
    })
}
insertRows(db, url, 2);
 
//insert data into table
//sql='INSERT INTO users(first_name,last_name,username,password,email) VALUES (?,?,?,?,?)'; //one ? for each Spalte
//db.run(sql,["fred","fredson","fred_user","testtwo","fred@gmail.com"],(err)=>{
//    if(err) return console.error(err.message);
//})

//log table
async function logTable(db) {
    db.all("SELECT *FROM quotes",[],(err,rows)=>{
        if(err) throw err;
        rows.forEach((row)=>{
            console.log(row);
        });
    });
}
logTable(db);

//update data
//sql='UPDATE users SET first_name=? WHERE id=?';
//db.run(sql,['jake',1],(err)=>{
//    if(err) return console.error(err.message);
//})

//delete data
// sql='DELETE FROM users WHERE id=?';
// db.run(sql,[2],(err)=>{
//    if(err) return console.error(err.message);
// })

//query the database
// sql='SELECT*FROM users';
// db.all(sql,[], (err,rows)=>{
//     if(err) return console.error(err.message);
//         rows.forEach(row=>{
//             console.log(row);
//         })
// })