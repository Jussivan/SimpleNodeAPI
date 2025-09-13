export class FeedService {
  list() {
    // Exemplo de feed estático
    return [
      { id: 1, title: 'Feed 1', podcastId: 1 },
      { id: 2, title: 'Feed 2', podcastId: 2 }
    ];
  }
}
