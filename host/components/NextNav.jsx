import { useUser } from '@auth0/nextjs-auth0';
import Link from 'next/link';
import Image from 'next/image'

export default function Nav() {
    const { user, checkSession } = useUser()

    return (
        <div style={{
            height: '72px',
            backgroundColor: '#272727',
            color: 'white',
            display: 'flex',
            padding: '0 12px',
            justifyContent: 'space-between',
            textAlign: 'center'
        }}>
            {/* <Link href="/" >
                <img src="https://dashboard.ibotta.com/_nuxt/74f688740390e3d8b76c22a4bab267d4.svg" layout="fill" style={{ cursor: 'pointer', padding: "12px 0" }} alt="user-image" />
            </Link> */}
            <div className='next-nav-links' style={{
                display: 'flex',
                gap: '12px',
                alignItems: 'center',
                fontSize: '24px',
                height: '100%'
            }}>
                <Link href="/users">Users</Link>
                <Link href="/hello-dynamic-page">Dynamic Page</Link>
                <Link href="/react">React</Link>
                <Link href="/profile">Profile</Link>
                {!user?.email ? <Link href="/api/auth/login">Login</Link> :
                    <Link href="/api/auth/logout">Logout</Link>}
            </div>
        </div>
    );
}
