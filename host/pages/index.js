import { useUser } from '@auth0/nextjs-auth0'

export default function Home() {
  const { user, isLoading } = useUser()

  return (
    <div>

      Auth: {user?.given_name}
      <main>
        This is the next home page
      </main>

    </div>
  );
}
