var express=require('express');
var app=express();
var http=require('http').Server(app);
var io=require('socket.io')(http);


app.set('view engine','jade')
app.set('views','./views')

app.use(express.static('public'))

app.get('/',function(req,res){
    
    res.render('index');
    
})

io.on('connection',function(socket){
    console.log('a user connected');
    
    socket.on('chat message',function(msg){
        console.log('message: '+msg);
       //  socket.broadcast.emit('chat message',msg)
        io.emit('chat message',msg);
    })
})



http.listen(3000,function(){
    console.log('server started');
})

