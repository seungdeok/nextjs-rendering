import { User } from "@/type/User";

async function getData(): Promise<User[]> {
  const res = await fetch(
    "https://68455700fc51878754db1dfa.mockapi.io/api/v1/users",
    {
      cache: "force-cache", // SSG
    }
  );
  return res.json();
}

export default async function SSG() {
  const users = await getData();
  return (
    <div>
      <h1>SSG</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
