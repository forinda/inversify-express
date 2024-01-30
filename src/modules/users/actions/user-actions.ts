import { injectable, inject } from 'inversify';
import { UserRepository } from '../repositories/user-repository';

@injectable()
class UserActions {
    constructor( @inject(UserRepository) private userRepository: UserRepository) {
    }
    async getUserById(id: number) {
        return await this.userRepository.getUserById(id);
    }

}

export { UserActions };
