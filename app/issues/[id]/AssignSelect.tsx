"use client";

import { Issue, User } from "@prisma/client";
import { Select, Skeleton } from "@radix-ui/themes";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function AssignSelect({ result }: { result: Issue }) {
  const {
    data: users,
    error,
    isLoading,
  } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: async ({ signal }) => {
      const res = await axios.get("/api/users", {
        // When you use Axios, the get() method returns an AxiosResponse object
        signal,
      });
      return res.data; // If we don't return response.data, React Query will receive the entire AxiosResponse object instead of the expected User[] array.
    },
    staleTime: 60000,
    retry: 3,
  });

  if (isLoading) {
    return <Skeleton />;
  }

  if (error) return null;

  const AssignUser = async (userId: string) => {
    try {
      await axios.patch(`/api/issues/${result.id}`, {
        // the object is the request body which is sent to the backend
        assignedToUserId: userId === "unassigned" ? null : userId, //  naming assignedToUserId in the AssignUser function is important because it must match the expected key in the backend API.
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Select.Root
      onValueChange={AssignUser}
      defaultValue={result.assignedToUserId || "unassigned"}
    >
      {/* whenever a user selects an option, onValueChange will pass the value of the selected <Select.Item> to AssignUser. */}
      <Select.Trigger />
      <Select.Content>
        <Select.Group>
          <Select.Label>Select User</Select.Label>
          <Select.Item value="unassigned">Unassigned</Select.Item>
          {users?.map((user) => (
            <Select.Item
              key={user.id}
              value={user.id} // The value={user.id} ensures that when a user is selected, their id is sent to onValueChange.
            >
              {user.name}
            </Select.Item>
          ))}
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
}
