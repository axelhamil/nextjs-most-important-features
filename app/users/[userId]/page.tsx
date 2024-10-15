import { type ReactElement } from "react";

import UpdateForm from "@/app/users/[userId]/updateForm";
import { getUser } from "@/app/users/data-access";

interface IPageProps {
  params: {
    userId: string;
  };
}

export default async function UserPage({
  params,
}: IPageProps): Promise<ReactElement> {
  const user = await getUser(parseInt(params.userId));

  if (!user) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-100">
        <h1 className="text-2xl font-bold text-red-600">User not found</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-md px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold text-gray-800">User Profile</h1>
      <div className="rounded-lg bg-white p-6 shadow-md">
        <h2 className="mb-4 text-xl font-semibold text-gray-700">
          {user.name}
        </h2>
        <UpdateForm userId={user.id} />
      </div>
    </div>
  );
}
