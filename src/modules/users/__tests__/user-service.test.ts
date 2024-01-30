import { UserActions } from "../actions/user-actions";
import { UserRepository } from "../repositories/user-repository";
import { UserService } from "../services/user-service";

describe('UserService', () => {
  let userService: UserService;
  let userActions: UserActions;

  beforeEach(() => {
    const userRepository = new UserRepository(); // Mock this if it makes external calls
    userActions = new UserActions(userRepository); // Mock this if necessary
    userService = new UserService(userActions);
  });

  it('should retrieve user by ID', async () => {
    const userId = 1;
    jest.spyOn(userActions, 'getUserById').mockResolvedValueOnce({ id: userId, name: 'John Doe' });

    const result = await userService.getUserById(userId);

    expect(result).toEqual({ id: userId, name: 'John Doe' });
    expect(userActions.getUserById).toHaveBeenCalledWith(userId);
  });

  // Add more tests as needed...
});
