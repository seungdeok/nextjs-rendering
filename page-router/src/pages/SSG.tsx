import { User } from "@/type/User";
import { GetStaticProps } from "next";

interface Props {
  users: User[];
}

// https://nextjs.org/docs/pages/building-your-application/rendering/static-site-generation
export const getStaticProps: GetStaticProps<Props> = async () => {
  const users = await fetch(
    "https://68455700fc51878754db1dfa.mockapi.io/api/v1/users"
  ).then((res) => res.json());

  return {
    props: { users },
  };
};

export default function SSG({ users }: { users: User[] }) {
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
