import Link from "next/link"

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white p-4">
        <nav className="container mx-auto">
          <Link href="/" className="mr-4 hover:underline">
            Home
          </Link>
          <Link href="/about" className="mr-4 hover:underline">
            About
          </Link>
          <Link href="/portfolio" className="hover:underline">
            Portfolio
          </Link>
        </nav>
      </header>
      <main className="flex-grow container mx-auto p-4">{children}</main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2023 My Next.js App</p>
      </footer>
    </div>
  );
}
