"use client";
import { type ReactElement, useRef } from "react";
import { useFormState, useFormStatus } from "react-dom";

import { Button } from "@/app/_components/ui/button";
import { Input } from "@/app/_components/ui/input";
import { Label } from "@/app/_components/ui/label";
import { updateNameAction } from "@/app/users/[userId]/actions";

interface IUserUpdateFormProps {
  userId: number;
}

export default function UpdateForm({
  userId,
}: IUserUpdateFormProps): ReactElement {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, action] = useFormState(updateNameAction, {
    message: "",
    name: "",
    userId,
  });

  if (state.message === "success") formRef.current?.reset();

  return (
    <form ref={formRef} action={action} className="space-y-4">
      <div>
        <Label htmlFor="name">Name:</Label>
        <Input id="name" name="name" defaultValue={state.name} />
      </div>
      <SubmitButton />
    </form>
  );
}

export const SubmitButton = () => {
  const status = useFormStatus();

  return (
    <Button type="submit">
      {status.pending ? "Updating..." : "Update Profile"}
    </Button>
  );
};
