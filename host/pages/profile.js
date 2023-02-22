import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import ProfileCard from '../components/ProfileCard'

const Profile = ({ user, isLoading }) => {
  return (
    <ProfileCard user={user} />
  )
}

// Protected route, checking user authentication client-side.(CSR)
export default withPageAuthRequired(Profile)
