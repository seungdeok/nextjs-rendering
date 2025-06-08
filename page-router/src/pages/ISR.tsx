import { User } from "@/type/User";
import { GetStaticProps } from "next";

interface Props {
  users: User[];
}

// https://nextjs.org/docs/pages/guides/incremental-static-regeneration
export const getStaticProps: GetStaticProps<Props> = async () => {
  const users = await fetch(
    "https://68455700fc51878754db1dfa.mockapi.io/api/v1/users"
  ).then((res) => res.json());

  return {
    props: { users },
    // Next.js will invalidate the cache when a
    // request comes in, at most once every 60 seconds.
    revalidate: 60,
  };
};

export default function ISR({ users }: { users: User[] }) {
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
