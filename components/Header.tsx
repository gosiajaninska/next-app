import Link from "next/link"
import { useRouter } from 'next/router'

export const Header = () => {
  const router = useRouter()

  return <header className="bg-pink-400 p-4 flex flex-col md:flex-row justify-between">
    OsomSzop
    <nav className="flex gap-4">
      <Link href="/">
        <a title="home" className={router.pathname == "/" ? "text-indigo-800" : ""}>Home</a>
      </Link>
      <Link href="/users">
        <a title="users" className={router.pathname.startsWith("/users") ? "text-indigo-800" : ""}>Users</a>
      </Link>      
      <Link href="/about">
        <a title="about" className={router.pathname == "/about" ? "text-indigo-800" : ""}>About</a>
      </Link>
    </nav>
  </header>
}