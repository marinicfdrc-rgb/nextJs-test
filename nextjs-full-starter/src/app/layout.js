// app/layout.js
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <header className="bg-green-600 text-white p-4 text-center">My App</header>
        <main>{children}</main>
      </body>
    </html>
  );
}
