import { IncomingMessage, ServerResponse } from 'http';
import { SubscriptionService } from '../services/subscriptionService';

const subscriptionService = new SubscriptionService();

export function handleSubscriptionRoutes(req: IncomingMessage, res: ServerResponse) {
  if (req.method === 'POST' && req.url === '/subscriptions') {
    let body = '';
    req.on('data', (chunk: Buffer) => (body += chunk));
    req.on('end', () => {
      const data = JSON.parse(body);
      const subscription = subscriptionService.subscribe(data);
      res.writeHead(201, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(subscription));
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Not found' }));
  }
}
