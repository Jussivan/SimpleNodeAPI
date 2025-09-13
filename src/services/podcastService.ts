type Podcast = {
  id: number;
  title: string;
  description: string;
  episodes: string[];
};

export class PodcastService {
  private podcasts: Podcast[] = [];
  private nextId = 1;

  list() {
    return this.podcasts;
  }

  create(data: { title: string; description: string }) {
    const podcast: Podcast = {
      id: this.nextId++,
      title: data.title,
      description: data.description,
      episodes: []
    };
    this.podcasts.push(podcast);
    return podcast;
  }
}
