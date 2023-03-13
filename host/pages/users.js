import mgmt from '../clients/management-client'

export default function Users({ data }) {
    const handleDelete = async (id) => {
        const input = confirm('Are you sure you want to delete this user?')
        if (input == true) {
            try {
                const response = await fetch(`/api/user/delete/${id}`)
                if (response.status === 204) location.reload()
            }
            catch (e) {
                console.error(e)
            }
        }
    }

    return (
        <div>
            <main>
                <h1>Users</h1>
                <ul>
                    {data?.map((user, index) => (
                        <li key={index} onClick={() => handleDelete(user.user_id)}>{user.email}</li>
                    ))}
                </ul>
            </main>
        </div>
    );
}

export const config = {
    runtime: 'nodejs'
}

export async function getServerSideProps() {
    const data = await mgmt.getUsers()


    return { props: { data } }
}