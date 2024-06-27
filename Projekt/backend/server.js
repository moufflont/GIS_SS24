const http = require('http');
const hostname = '127.0.0.1'; // localhost
const port = 3000;

const sqlite3= require('sqlite3').verbose();
let sqlmessage;
let result;

//connect to DB
const db =  new sqlite3.Database('./database.db', sqlite3.OPEN_READWRITE,(err)=>{
    if(err) return console.error(err.message);
});

//create table
sqlmessage='CREATE TABLE IF NOT EXISTS vocabularyCollection (id INTEGER PRIMARY KEY,vocabulary,translation)';
db.run(sqlmessage);

 const server = http.createServer((request, response) => { //request vom client; response vom server
   response.statusCode = 200;
   response.setHeader("Content-Type", "text/html");
   response.setHeader('Access-Control-Allow-Origin', '*'); // on CORS error

   const url = new URL(request.url || '', 'http://${request.headers.host}'); 
  
  switch (url.pathname) {
    case '/':
      response.write('Hello');
      break;
    case '/getVocabulary': //url-Anhang
      sqlmessage='SELECT * FROM  vocabularyCollection';
      db.all(sqlmessage,(err,rows)=>{
        if(err) return console.error(err.message);
        response.write(JSON.stringify(rows));
        response.end();
      })
      break;
    case '/selectVocabulary': //für einzelne
      sqlmessage='SELECT * FROM vocabularyCollection WHERE id=?';
      result = db.all(sqlmessage,[url.searchParams.get('itemId')],(err,rows)=>{
            if(err) return console.error(err.message);
                rows.forEach(row=>{
                    console.log(row);
                    response.on(JSON.stringify(row));
                })
              })
      response.end();
      break;
    case '/addVocabulary': 
      sqlmessage='INSERT INTO vocabularyCollection(vocabulary,translation) VALUES(?,?)';
      db.run(sqlmessage,[JSON.parse(itemV),JSON.parse(itemT)], (err)=>{ //funktioniert, wenn itemV und itemT durch "wörter" ausgetauscht werden
        return console.error(err.message);
      })
      break;
    case '/deleteVocabulary': //nicht getestet
      sqlmessage='DELETE FROM vocabularyCollection WHERE id=?';
      db.run(sqlmessage, [itemId],(err)=>{ //wie macht man das mit beliebigen parametern?
        if(err) return console.error(err.message);
      })
      break;
    case '/editVocabulary': //auch hier id nach ? in url übergeben
     sqlmessage='UPDATE vocabularyCollection SET vocabulary=? WHERE id=?';
     db.run (sqlmessage,[JSON.parse(itemV),itemId],(err)=>{
      if(err) return console.error(err.message);
     })
     sqlmessage='UPDATE vocabularyCollection SET translation=? WHERE id=?';
     db.run(sqlmessage,[JSON.parse(itemT),itemId],(err)=>{
      if(err) return console.error(err.message);
     })
      break;
    default:
      response.statusCode = 404;
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});