import dynamic from 'next/dynamic';
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0'

const RemoteReactApp = dynamic(() => import('remote/ReactApp'), {
    ssr: false,
});

function React() {
    const { user, isLoading } = useUser()

    return (
        <RemoteReactApp user={user} isLoading={isLoading} />
    );
}

export default withPageAuthRequired(React)