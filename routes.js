const routes = require('next-routes');

module.exports = routes()
	.add('/campaign/new', '/campaign/new')
	.add('/campaign/:address', 'campaign/show');
