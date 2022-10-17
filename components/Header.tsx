import Link from "next/link"
import { useRouter } from 'next/router'
import { Logo } from "./Logo"

const NAV = [
  {
    name: "Products",
    href: "/products",
    title: "products",
  },
  {
    name: "Sale",
    href: "/sale",
    title: "sale",
  },
  {
    name: "About",
    href: "/about",
    title: "about",
  },
  {
    name: "Contact",
    href: "/contact",
    title: "contact",
  },            
]

export const Header = () => {
  const router = useRouter()

  return (
    <header aria-label="Site Header" className="border-b border-gray-500 px-4 z-10">
      <div
        className="mx-auto flex max-w-screen-2xl items-center justify-between"
      >
        <div className="flex items-center">
          <button type="button" className="p-2 sm:mr-4 lg:hidden">
            <svg
              className="h-6 w-6 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <Logo cssClass="h-20 w-20 p-4"></Logo>
        </div>

        <div className="flex flex-1 items-center justify-end">
          <nav className="hidden absolute top-20 right-0 left-0 flex-col p-4 bg-slate-200 lg:flex gap-4 lg:static lg:flex-row lg:bg-transparent lg:h-20 lg:p-0 text-xs font-bold uppercase lg:tracking-wide text-gray-500" aria-label="Site Nav">

            {NAV.map((link, i) => {
              const currentLink = router.pathname.startsWith(link.href) ? 'border-current' : 'border-transparent'

              return (
                <Link href={link.href} key={i}>
                  <a className={`flex items-center border-b-4 ${currentLink} leading-8 hover:border-current hover:opacity-75`}>
                    {link.name}
                  </a>
                </Link>
              )
            })}

          </nav>

          <div className="h-20 lg:ml-8 flex items-center">
            <Link href="/cart">
              <a
                className={`flex items-center h-full text-gray-500 border-b-4 border-${router.pathname.startsWith('/cart') ? 'current' : 'transparent'} p-6 hover:opacity-75`}
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>

                <span className="sr-only">Cart</span>
              </a>
            </Link>

            <Link href="/account">
              <a
                className={`flex items-center h-full text-gray-500 border-b-4 border-${router.pathname.startsWith('/account') ? 'current' : 'transparent'} p-6 hover:opacity-75`}
              >
                <svg
                  className="h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>

                <span className="sr-only"> Account </span>
              </a>
            </Link>

            <Link href="/search">
              <a
                className={`hidden lg:flex items-center h-full text-gray-500 border-b-4 border-${router.pathname.startsWith('/account') ? 'current' : 'transparent'} p-6 hover:opacity-75`}
              >
                <svg
                  className="h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>

                <span className="sr-only"> Search </span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}