import { User } from "@/type/User";

async function getData(): Promise<User[]> {
  const res = await fetch(
    "https://68455700fc51878754db1dfa.mockapi.io/api/v1/users",
    {
      next: { revalidate: 60 },
    }
  );
  return res.json();
}

export default async function ISR() {
  const users = await getData();
  return (
    <div>
      <h1>ISR</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
