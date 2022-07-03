const EventEmitter=require('events')
const Emitter=new EventEmitter();
//Register a listener
Emitter.on('message logged',(args)=>{
    console.log('event raised')
    console.log(args.msg)
})
//Raise an event
Emitter.emit('message logged',{id:1,msg:'nice'})