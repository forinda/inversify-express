import { Request, Response } from 'express';
import { injectable, inject } from 'inversify';
import { UserService } from '../services/user-service';

@injectable()
class UserController {
    private userService: UserService;

    constructor(@inject(UserService) userService: UserService) {
        this.userService = userService;
    }

    async getUserById(req: Request, res: Response) {
        const userId = parseInt(req.params.id);
        const user = await this.userService.getUserById(userId);
        res.json(user);
    }

    // Other endpoints
}

export { UserController };
