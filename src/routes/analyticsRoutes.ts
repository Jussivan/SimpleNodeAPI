import { IncomingMessage, ServerResponse } from 'http';
import { AnalyticsService } from '../services/analyticsService';

const analyticsService = new AnalyticsService();

export function handleAnalyticsRoutes(req: IncomingMessage, res: ServerResponse) {
  if (req.method === 'GET' && req.url === '/analytics') {
    const analytics = analyticsService.getStats();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(analytics));
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Not found' }));
  }
}
