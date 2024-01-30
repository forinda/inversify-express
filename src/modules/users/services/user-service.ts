import { injectable, inject } from 'inversify';
import { UserActions } from '../actions/user-actions';

@injectable()
class UserService {

    constructor(@inject(UserActions) private userActions: UserActions) { }

    async getUserById(id: number) {
        return this.userActions.getUserById(id);
    }

}

export { UserService };
