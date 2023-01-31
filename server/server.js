console.clear();
const net = require('node:net');
const server = net.createServer()
const i=0;
const userNames = {};
const arrayU= [];
const port=3000;
const host= '192.168.2.162';


server.on('connection',(socket)=>{
  if(userNames[socket.remoteAddress]===undefined){
   userNames[socket.remoteAddress]= socket.remoteAddress;
   socket.write('Elige tu username:');
  }
  
   
  arrayU.push(socket);  
  
  console.log("Se ha unido: " + userNames[socket.remoteAddress]);
  socket.on("data",(data)=>{
   if (userNames[socket.remoteAddress] === socket.remoteAddress){
 
     for(const key in userNames){
       if(userNames[key] === data.toString().trim()){
       socket.write("Este nombre de usuario ya ha sido tomado." + "\nEscribe un username diferente:")
       return
       }
     }
         userNames[socket.remoteAddress] = data.toString().trim();
         socket.write("Tu username es:" + userNames[socket.remoteAddress]+"\nEscribe un mensaje:");
         
     
     return;
   }
  
  
 for(let i=0; i<arrayU.length;i++){
   if (arrayU[i].remoteAddress === socket.remoteAddress) continue;
   arrayU[i].write(userNames[socket.remoteAddress] + ":" + data.toString().trim()+"\n") 
 }

   console.log(userNames[socket.remoteAddress] + ":" + data.toString().trim());
 });

  socket.on('close',()=>{
    arrayUsers.map((user) => {
      user.write(
        nickNames[client.remoteAddress] + " se ha desconectado del servidor."+"\n");
    });

  });

  


  server.on("error", (err) => {
    console.log(err);
  });
  

  socket.on('error', (err)=>{
    if(err.errno == -4077){
       
        arrayUsers.map((user) => {
          user.write(
            nickNames[client.remoteAddress] + " se ha desconectado del servidor."+"\n");
        });

    console.log( userNames[socket.remoteAddress] + "se ha desconectado del servidor."+"\n");
    }else{
        console.error(err);
    }
  });

});


  server.listen(port,host, () => {
    console.log('El servidor esta escuchando en la puerta', port )

  });



    

//  server.listen(options,()=>{
   //   console.log('El servidor esta escuchando en la puerta', server.address().port)
//  })  

