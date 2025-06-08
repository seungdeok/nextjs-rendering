"use client";

import { User } from "@/type/User";
import { useState, useEffect } from "react";

export default function CSRPage() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function request() {
      const response = await fetch(
        "https://68455700fc51878754db1dfa.mockapi.io/api/v1/users"
      );
      const users = await response.json();
      setUsers(users);
    }

    request();
  }, []);

  return (
    <div>
      <h1>CSR</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
