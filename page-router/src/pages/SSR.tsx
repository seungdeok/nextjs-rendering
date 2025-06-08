import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { User } from "@/type/User";

interface Props {
  users: User[];
}

// https://nextjs.org/docs/pages/building-your-application/rendering/server-side-rendering
export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const users = await fetch(
    "https://68455700fc51878754db1dfa.mockapi.io/api/v1/users"
  ).then((res) => res.json());
  return { props: { users } };
};

export default function SSR({
  users,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
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
