const http = require('http');
const publicIp = require('public-ip');
const WebSocketServer = require('websocket').server;
const server = http.createServer();
const PORT = 9898;
server.listen(PORT);
const wsServer = new WebSocketServer({
    httpServer: server
});
const chalk = require("chalk");
const low = require("lowdb")
const FileSync = require("lowdb/adapters/FileSync");
const adapter2 = new FileSync("./users.json");
const db2 = low(adapter2);
db2.defaults({
    users: []
    }).write();
const readline = require("readline")
var rl = readline.createInterface({
input: process.stdin,
output: process.stdout
})
console.log(chalk.red(" _   _____    _____   _____   __   _   _____   _____   _       _____  "))      
console.log(chalk.red("| | |  _  \\  /  ___| /  _  \\ |  \\ | | /  ___/ /  _  \\ | |     | ____| "))     
console.log(chalk.red("| | | |_| |  | |     | | | | |   \\| | | |___  | | | | | |     | |__   "))   
console.log(chalk.blue("| | |  _  /  | |     | | | | | |\\   | \\___  \\ | | | | | |     |  __|  "))     
console.log(chalk.blue("| | | | \\ \\  | |___  | |_| | | | \\  |  ___| | | |_| | | |___  | |___  "))     
console.log(chalk.blue("|_| |_|  \\_\\ \\_____| \\_____/ |_|  \\_| /_____/ \\_____/ |_____| |_____| "))
console.log(chalk.bold("[!] Server updates every 30 seconds to add the new connections into it. Please wait up to 30 seconds before sending your first message. [!]"))        
console.log("\n")       
console.log("\n")         
function Login(input2){
  if(db2.get("users").find({
        Name: input2,
    }).value()){
        function LoginPass(input3){
if(db2.get("users").find({
Name: input2,
Password: input3
}).value()){
  (async () => {
    console.log(chalk.blueBright("Connected with the IP address: "))
    console.log(chalk.cyan(await publicIp.v4()));
    console.log(chalk.blueBright("Connected on : "))
  console.log(chalk.cyan(__dirname))
  console.log(chalk.blueBright("Connected on port : "))
  console.log(PORT);
  })();
wsServer.on('request', function(request) {
    const connection = request.accept(null, request.origin);
    connection.on('message', function(message) {
      function SendMessage(x){
        function Message(){
            var newdate = new Date();
            var dd = String(newdate.getDate()).padStart(2, '0');
            var mm = String(newdate.getMonth() + 1).padStart(2, '0');
            var yyyy = newdate.getFullYear();
            var hh = newdate.getHours();
            var min = newdate.getMinutes();
            var date = mm + "/" + dd + "/" + yyyy + " at " + hh + ":" + min;
            rl.question("", (y) => {
                connection.sendUTF(y)
                console.log(chalk.gray(input2 + " ") + chalk.blackBright(date + " | ") + chalk.cyan(y))
                })
        }
        Message()
    }
    SendMessage()
    })
  })
}
else{
  console.log("Wrong password!")
  throw 'ERROR: WRONG PASSWORD'
}
              }
              rl.question("Please, enter your password. : ", (z) => {
                LoginPass(z)
            })
          }

          else{ console.log("This user doesn't exist! Use register.js to create an user!")
          throw 'ERROR: USER NOT FOUND. DISCONNECTING...';
      }
}

rl.question("Please, login by entering your username. : ", (x) => {
Login(x)
})
