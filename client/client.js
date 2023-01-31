console.clear();
const net = require('node:net');

const port=3000;
const host= '192.168.2.162';

const client = new net.Socket();
client.connect(port, host);

client.on('connect', ()=>{
    process.stdin.on("data", (data) => {
        client.write(data.toString());
      });
});

client.on('data', (data)=>{
    console.log(data.toString().trim());   
});


client.on("error", (err) => {
    if (err.errno == -4077) {
      console.log("Se ha perdido comunicación con el servidor");
    } else {
      console.error(err);
    }
  
    process.exit(0);
  });

