const readline = require("readline")
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
})

const { createHmac } = require('crypto');

const low = require("lowdb")
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("./users.json");
const db = low(adapter);
db.defaults({
    users: []
    }).write();

    function Register(input4){
if(db.get("users").find({
    Name: input4
}).value()){ 
    console.log("This user already exists!")
throw 'ERROR. USER ALREADY EXISTS. DISCONNECTING...'
}

else { function UserCreate(input5){
    var token = '';
    let char = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    for(var i = 0; i < 11; i++){
        token = token + char.charAt(Math.floor(Math.random() * char.length));
    }

    const tokentosha = token
    const token2 = createHmac('sha256', tokentosha)
    .digest('hex');

    db.get("users").push({
    Name: input4,
    Password: input5,
    Token: token,
    TokenSHA256: token2
    }).write()
}
rl.question("Please enter a password : ", (y) =>{
UserCreate(y)
rl.close();
})
}
    }

    rl.question("Please enter an username : ", (x) => {
Register(x)
    })
