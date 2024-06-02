import { User } from "../models/User";

class UserRepository {
    private users: User[] = [
        { id: 1, nome: "Carlos"},
        { id: 2, nome: "Rafaela"}
    ]

    public findById(id: number): User | undefined {
        return this.users.find(user => user.id === id);
    }
}

export default new UserRepository();