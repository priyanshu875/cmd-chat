const app=require("express")();
const server=require("http").createServer(app);
const cors=require('cors');
app.use(cors());
const io=require("socket.io")(server,{
    cors:{
        origin:"*"
    }
})


io.on("connection",(socket)=>{
    console.log(socket);
    
    socket.on("user-join",(payload)=>{
        io.emit("user-join",{userName:"terminal",msg:payload.msg})
    })

    socket.on("chat",(payload)=>{
        console.log(payload);
        io.emit("chat",payload);
    })

})

server.listen(3001,()=>{
    console.log("server started");
});