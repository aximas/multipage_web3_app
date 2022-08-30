import Routes from 'next-routes';

// export const routes = nextRoutes() as Routes;
// export const Router = routes.Router;
// export const Link  = routes.Link

export const customRoutes = new Routes();

customRoutes.add('/campaign/new', '/campaign/new').add('/campaign/:address', 'campaign/show')

export const Link = customRoutes.Link;
export const Router = customRoutes.Router;
