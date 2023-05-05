import http from 'http'
import routes from "./routes.js"

//bir modul olarak cagirabildigimiz route islemlerini yine bir npm module araciligiyle daha saglikli yapacagiz
const server = http.createServer(routes);
server.listen(3000);
console.log('Listening port on 3000')