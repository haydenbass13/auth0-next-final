import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0';

export default function Home() {
  const { user, isLoading } = useUser()

  return (
    <div>
      <main>
        <h1>This is the next home page</h1>
        <h2>Authorized as {user?.given_name} | {user?.email}</h2>
      </main>
    </div>
  );
}

export const getServerSideProps = withPageAuthRequired()
