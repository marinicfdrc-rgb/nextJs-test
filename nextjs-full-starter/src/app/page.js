'use client'; // client-side because it has form state

import { useRouter } from 'next/navigation';
import LoginForm from '../components/LoginForm';

export default function HomePage() {
  const router = useRouter();

  const handleLogin = (email, password) => {
    // Simplified authentication (replace with real API)
    if (email === 'admin@test.com' && password === '123456') {
      router.push('/dashboard'); // Navigate to dashboard
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
}
