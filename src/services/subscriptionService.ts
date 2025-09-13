type Subscription = {
  userId: number;
  podcastId: number;
};

export class SubscriptionService {
  private subscriptions: Subscription[] = [];

  subscribe(data: { userId: number; podcastId: number }) {
    const subscription: Subscription = {
      userId: data.userId,
      podcastId: data.podcastId
    };
    this.subscriptions.push(subscription);
    return subscription;
  }
}
