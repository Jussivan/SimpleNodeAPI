import http, { IncomingMessage, ServerResponse } from 'http';
import { handlePodcastRoutes } from './routes/podcastRoutes';
import { handleFeedRoutes } from './routes/feedRoutes';
import { handleSubscriptionRoutes } from './routes/subscriptionRoutes';
import { handleAnalyticsRoutes } from './routes/analyticsRoutes';

const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
  if (!req.url) return;

  if (req.url.startsWith('/podcasts')) {
    handlePodcastRoutes(req, res);
  } else if (req.url.startsWith('/feeds')) {
    handleFeedRoutes(req, res);
  } else if (req.url.startsWith('/subscriptions')) {
    handleSubscriptionRoutes(req, res);
  } else if (req.url.startsWith('/analytics')) {
    handleAnalyticsRoutes(req, res);
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Not found' }));
  }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
