import Logger from "./logger.js"
const logger = new Logger();




logger.on('connection',(args)=>{
    console.log(args.greating,args.name)
})
logger.log("Hello");


