const http = require('http');

const hostname = '127.0.0.1'; // localhost
const port = 3000;

//Beispiel-Vokabeln
let voc =[{vocabulary:"picture", translation:"Bild"},{vocabulary:"house", translation:"Haus"}]; // anstelle von array mit datenbank arbeiten

//wohin?
//opening database
import sqlite3 from 'sqlite3';
import {open} from 'sqlite';
(async ()=>{
  const db= await open({
    filename: '/database/database.db',
    driver: sqlite3.Database
  })
})

//tabelle erstellen
db.exec('CREATE TABLE IF NOT EXISTS vocabularyCollection (id INT, vocabulary TEXT, translation TEXT)');

const server = http.createServer((request, response) => { //request vom client; response vom server
  response.statusCode = 200;
  response.setHeader("Content-Type", "text/html"); //hier anstelle text/plain html nennen und auf html seiten verweisen? oder application/json?
  //response.setHeader('Access-Control-Allow-Origin', '*'); // on CORS error

  const url = new URL(request.url || '', 'http://${request.headers.host}'); 
  
  switch (url.pathname) {
    case '/':
    response.write('Hello');
    break;
    case '/getVocabulary': //url-Anhang
    const result= db.all('SELECT * FROM vocabularxCollection');
      response.write(JSON.stringify(result));
      break;
    case '/selectVocabulary': //für einzelne
    if()
      response.write(JSON.stringify(db.get('SELECT ')))
    case '/addVocabulary': 
      request.on(db.run('INSERT INTO vocabularyCollection (id) VALUES(itemId)'));
      request.on(db.run('INSERT INTO vocabularyCollection (vocabulary) VALUES(itemV)'));
      request.on(db.run('INSERT INTO vocabularyCollection (translation) VALUES(itemT)'));

//      if (request.method === 'POST') {
//        let jsonString = '';
//        request.on('data', (data) => { //solange daten kommen, sollen sie aufaddiert werden (string wird zerlegt)
//          jsonString += data;
//        });
//        request.on('end', () => {
//          console.log(JSON.parse(jsonString));
//          voc+= JSON.parse(jsonString); //hier geparsten jsonString zu array voc hinzufügen
//        });
//      }
      break;
    case '/deleteVocabulary': 
      const requestMessage = db.run('DELETE FROM vocabularyCollection WHERE id=itemId');
      request.on(requestMessage);
      break;
    case '/editVocabulary': //auch hier id nach ? in url übergeben
      request.on(db.run('UPDATE vocbularyCollection SET vocabulary = itemV WHERE id=itemId'));
      request.on(db.run('UPDATE vocabularyCollection SET translation =itemT WHERE id=itemId'));
      break;
    default:
      response.statusCode = 404;
  }
  response.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});