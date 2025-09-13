import { User } from '../models/User';

export class UserRepository {
    private users: User[] = [];
    private nextId = 1;

    getAll(): User[] {
        return this.users;
    }

    getById(id: number): User | undefined {
        return this.users.find(u => u.id === id);
    }

    create(user: Omit<User, 'id'>): User {
        const newUser: User = { id: this.nextId++, ...user };
        this.users.push(newUser);
        return newUser;
    }

    delete(id: number): boolean {
        const index = this.users.findIndex(u => u.id === id);
        if (index >= 0) {
            this.users.splice(index, 1);
            return true;
        }
        return false;
    }
}
