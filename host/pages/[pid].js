import { useRouter } from 'next/router'
import { useState } from 'react'

const Post = ({ auth }) => {
    const router = useRouter()
    const { pid } = router.query

    function updateRoute(event) {
        event.preventDefault()
        if (content.length) {
            router.push(encodeURIComponent(content))
        }
    }

    const [content, setContent] = useState("");

    return (

        <div>
            <h1>Page ID: {pid}</h1>
            Auth: {auth}
            <dl>
                <dt><h2><a href="https://nextjs.org/docs/routing/dynamic-routes" target="_blank" style={{
                    textDecoration: 'underline',
                    color: '#9c005e'
                }}>Next Dynamic Route</a></h2></dt>
                <dd>This page is generated using a dynamic route</dd>
                <dd>Create a new route by entering a term and hitting "GO"</dd>
                <br />
                <form onSubmit={updateRoute} style={{ display: 'flex', justifyContent: "center", gap: '5px' }}>
                    <input type="text" onChange={(e) => setContent(e.target.value)} style={{ width: "200px", height: '34px' }} />
                    <input type="submit" value="GO" />
                </form>

            </dl>
        </div>
    )
}

export default Post