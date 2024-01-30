import { UserRepository } from "../repositories/user-repository";
import { UserActions } from "../actions/user-actions";

jest.mock('../repositories/user-repository');

describe('UserActions', () => {
  let userActions: UserActions;
  let userRepository: jest.Mocked<UserRepository>;

  beforeEach(() => {
    userRepository = new UserRepository() as jest.Mocked<UserRepository>;
    userActions = new UserActions(userRepository);
  });

  it('should get user by ID', async () => {
    const userId = 1;
    userRepository.getUserById.mockResolvedValueOnce({ id: userId, name: 'Test User' });

    const result = await userActions.getUserById(userId);

    expect(result).toEqual({ id: userId, name: 'Test User' });
    expect(userRepository.getUserById).toHaveBeenCalledWith(userId);
  });

  // More tests...
});
