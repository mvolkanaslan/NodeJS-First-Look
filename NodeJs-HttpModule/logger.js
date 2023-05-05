import EventEmitter from "events";
export default class Logger extends EventEmitter{

    log=(message)=>{
        console.log(message)
        this.emit('connection',{greating:"Hello",name:"Volkan"})
    }
}

