import { IncomingMessage, ServerResponse } from 'http';
import { FeedService } from '../services/feedService';

const feedService = new FeedService();

export function handleFeedRoutes(req: IncomingMessage, res: ServerResponse) {
  if (req.method === 'GET' && req.url === '/feeds') {
    const feeds = feedService.list();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(feeds));
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Not found' }));
  }
}
