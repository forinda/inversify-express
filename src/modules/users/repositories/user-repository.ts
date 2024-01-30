import { injectable } from 'inversify';

@injectable()
class UserRepository {
    private users = [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Doe' },
        { id: 3, name: 'Jack Doe'},
        { id: 4, name: 'Jill Doe'}
    ];
    async getUserById(id: number) {
        const user = this.users.find(u => u.id === id);
        return user;
    }
}

export { UserRepository };
