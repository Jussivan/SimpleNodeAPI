import { IncomingMessage, ServerResponse } from 'http';
import { PodcastService } from '../services/podcastService';

const podcastService = new PodcastService();

export function handlePodcastRoutes(req: IncomingMessage, res: ServerResponse) {
  if (req.method === 'GET' && req.url === '/podcasts') {
    const podcasts = podcastService.list();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(podcasts));
  } else if (req.method === 'POST' && req.url === '/podcasts') {
    let body = '';
    req.on('data', (chunk: Buffer) => (body += chunk));
    req.on('end', () => {
      const data = JSON.parse(body);
      const podcast = podcastService.create(data);
      res.writeHead(201, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(podcast));
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Not found' }));
  }
}
