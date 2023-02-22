export default function ({ user }) {
    return (
        <div style={{
            border: "1px red solid",
        }}>
            <h1>Profile Card</h1>
            <div>
                <h3>Profile (powered by Auth0)</h3>
                <img src={user.picture} alt="user picture" />
                <p>nickname: {user.nickname}</p>
                <p>name: {user.name}</p>
            </div>
        </div>
    )
}