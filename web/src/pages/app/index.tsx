import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";

export default function Home() {
  const { user, isLoading, error } = useUser()
  return (
    <pre>
      <code>{JSON.stringify(user, null, 2)}</code>
      <a href="/api/auth/logout">Deslogar</a>
    </pre>
  )
}

export const getServerSideProps = withPageAuthRequired();