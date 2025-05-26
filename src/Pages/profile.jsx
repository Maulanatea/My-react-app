import { useLogin } from "../hooks/useLogin";

const ProfilePage = () => {
  const username = useLogin()
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Profile Page</h1>
      <p className="text-lg text-gray-700">This is the profile page.</p>
      <p className="text-lg text-gray-700 mt-2">Welcome, {username}!</p>
    </div>
  );
}
export default ProfilePage;