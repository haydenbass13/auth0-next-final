import { withApiAuthRequired } from '@auth0/nextjs-auth0'
import mgmt from '../../../../clients/management-client'

// Serverless function
// Protected API, requests to '/api/protected' without a valid session cookie will fail

async function handle(req, res) {
    const { id } = req.query
    console.log(id)

    try {
        const response = await mgmt.deleteUser({id})
        console.log(response)
        res.status(204).send()
    } catch (e) {
        console.error(e)
        res.status(e.status ?? 500).json({ error: e.message ?? 'Unable to fetch', description: e })
    }
}

export default withApiAuthRequired(handle)
