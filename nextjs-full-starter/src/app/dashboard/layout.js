'use client';

import { useRouter } from 'next/navigation';
export default function DashboardLayout({ children }) {
  const router = useRouter();

  const handleLogout = () => {
    // Remove token from localStorage
    localStorage.removeItem('token');
    // Redirect to login page
    router.push('/');
  };
  return (
    <div className="min-h-screen flex">
      <aside className="w-64 bg-gray-800 text-white p-4">
        <h2 className="text-xl font-bold mb-4">Dashboard Menu</h2>
        <ul>
          <li className="mb-2">Home</li>
          <li className="mb-2">Profile</li>
          <li className="mb-2">Settings</li>
        </ul>
        <button
        onClick={handleLogout}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Logout
      </button>
      </aside>
      <div className="flex-1 p-6">{children}</div>
    </div>
  );
}
