const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://afrahakimb22cs2109:3MgJJwopEzF37iRO@cluster.ll1otlu.mongodb.net/?retryWrites=true&w=majority&appName=cluster').then((res)=>{
    console.log('DB is connected')
}).catch((res)=>{
    console.log('DB not connected')
})    