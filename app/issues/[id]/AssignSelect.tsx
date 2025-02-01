"use client";

import { User } from "@prisma/client";
import { Select, Skeleton } from "@radix-ui/themes";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function AssignSelect() {
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

  return (
    <Select.Root defaultValue="apple">
      <Select.Trigger />
      <Select.Content>
        <Select.Group>
          <Select.Label>AssignSelect</Select.Label>
          {users?.map((user) => (
            <Select.Item value={user.id}>{user.name}</Select.Item>
          ))}
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
}
