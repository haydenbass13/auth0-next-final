import dynamic from 'next/dynamic';
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0'

const RemoteReactApp = dynamic(() => import('remote/ReactApp'), {
    ssr: false,
});

export default function React() {
    const { user, isLoading } = useUser()

    return (
        <RemoteReactApp user={user} isLoading={isLoading} />
    );
}

export const getServerSideProps = withPageAuthRequired()