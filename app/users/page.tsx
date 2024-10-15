import Link from "next/link";
import { type ReactElement } from "react";

import { getUsers } from "@/app/users/data-access";

export default async function UsersPage(): Promise<ReactElement> {
  const users = await getUsers();

  return (
    <main className="container mx-auto px-4 py-8 md:py-16">
      <h1 className="mb-6 text-3xl font-bold text-gray-800">Users</h1>
      <ul className="space-y-4">
        {users.map((user) => (
          <li
            key={`user-${user.id}`}
            className="rounded-lg bg-white p-4 shadow-md transition-transform hover:scale-105"
          >
            <Link
              href={`/users/${user.id}`}
              className="flex items-center text-lg font-medium text-blue-600 hover:text-blue-800"
            >
              <span className="mr-2">{user.name}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
