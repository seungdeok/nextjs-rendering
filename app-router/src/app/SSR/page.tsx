import { User } from "@/type/User";

async function getData(): Promise<User[]> {
  const res = await fetch(
    "https://68455700fc51878754db1dfa.mockapi.io/api/v1/users",
    {
      cache: "no-store", // 캐시 비활성화로 매번 새로운 데이터 fetch(SSG)
    }
  );
  return res.json();
}

export default async function SSR() {
  const users = await getData();
  return (
    <div>
      <h1>SSR</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
