import { Request, Response } from 'express';
import { UserRepository } from '../repositories/UserRepository';
import { validateEmail } from '../utils/validateEmail';

const userRepository = new UserRepository();

export class UserController {
    static getAll(req: Request, res: Response) {
        res.json(userRepository.getAll());
    }

    static getById(req: Request, res: Response) {
        const id = Number(req.params.id);
        const user = userRepository.getById(id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json(user);
    }

    static create(req: Request, res: Response) {
        const { name, email } = req.body;
        if (!name || !email || !validateEmail(email)) {
            return res.status(400).json({ message: 'Invalid data' });
        }
        const user = userRepository.create({ name, email });
        res.status(201).json(user);
    }

    static delete(req: Request, res: Response) {
        const id = Number(req.params.id);
        const deleted = userRepository.delete(id);
        if (!deleted) return res.status(404).json({ message: 'User not found' });
        res.status(204).send();
    }
}
