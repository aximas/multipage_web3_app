import {createServer } from 'http';
import {customRoutes} from './routes.js';
import next from 'next';
const port = 3000;

const app = next({
	dev: process.env.NODE_ENV !== 'production',
});

const handler = customRoutes.getRequestHandler(app);

app.prepare().then(() => {
	createServer(handler).listen(port, (err) => {
		if (err) throw err;
		console.log(`Ready on localhost:${port}`);
	});
});
