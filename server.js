import http from 'https://github.com/santiyt65/GOGETA-BOT';
import app from './config/app';

const server = http.Server(app);
server.listen(3000, () => {
       return true;
});
