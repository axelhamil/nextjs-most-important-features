export interface User {
  id: number;
  name: string;
}

(global as any).users = [
  {
    id: 1,
    name: "John Doe",
  },
  {
    id: 2,
    name: "Jane Doe",
  },
  {
    id: 3,
    name: "John Smith",
  },
  {
    id: 4,
    name: "Jane Smith",
  },
];

export async function getUsers(): Promise<User[]> {
  return (global as any).users;
}

export async function getUser(id: number): Promise<User | undefined> {
  return (global as any).users.find((user: User) => user.id === id);
}

export async function updateUser(id: number, name: string): Promise<void> {
  return new Promise((resolve) => {
    const user = (global as any).users.find((user: User) => user.id === id);
    const index = (global as any).users.indexOf(user);

    (global as any).users[index] = { ...user, name };
    resolve();
  });
}
