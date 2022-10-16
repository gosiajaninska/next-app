import Link from "next/link"
import { useRouter } from 'next/router'

export const Header = () => {
  const router = useRouter()

  return (
    <header aria-label="Site Header" className="border-b border-gray-100">
      <div
        className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between"
      >
        <div className="flex items-center">
          <button type="button" className="p-2 sm:mr-4 lg:hidden">
            <svg
              className="h-6 w-6"
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

          <Link href="/">
            <a className="flex">
              <span className="sr-only">Logo</span>
              <span className="inline-block h-10 w-32 rounded-lg bg-gray-200"></span>
            </a>
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-end">
          <nav
            aria-label="Site Nav"
            className="hidden lg:flex lg:gap-4 lg:text-xs lg:font-bold lg:uppercase lg:tracking-wide lg:text-gray-500"
          >
            <Link href="/products">
              <a
                className={`block h-16 border-b-4 ${router.pathname.startsWith('/products') ? 'border-current' : 'border-transparent'} leading-[4rem] hover:border-current hover:text-red-700`}
              >
                Products
              </a>
            </Link>

            <Link href="/sale">
              <a
                className={`block h-16 border-b-4 ${router.pathname.startsWith('/sale') ? 'border-current' : 'border-transparent'} leading-[4rem] hover:border-current hover:text-red-700`}
              >
                Sale
              </a>
            </Link>

            <Link href="/about">
              <a
                className={`block h-16 border-b-4 ${router.pathname.startsWith('/about') ? 'border-current' : 'border-transparent'} leading-[4rem] hover:border-current hover:text-red-700`}
              >
                About
              </a>
            </Link>

            <Link href="/contact">
              <a
                className={`block h-16 border-b-4 border-${router.pathname.startsWith('/contact') ? 'current' : 'transparent'} leading-[4rem] hover:border-current hover:text-red-700`}
              >
                Contact
              </a>
            </Link>
          </nav>

          <div className="ml-8 flex items-center">
            <div
              className="flex items-center divide-x divide-gray-100 border-x border-gray-100"
            >
              <span>
                <Link href="/cart">
                  <a
                    className={`block border-b-4 border-${router.pathname.startsWith('/cart') ? 'current' : 'transparent'} p-6 hover:border-red-700`}
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
              </span>

              <span>
                <Link href="/account">
                  <a
                    className={`block border-b-4 border-${router.pathname.startsWith('/account') ? 'current' : 'transparent'} p-6 hover:border-red-700`}
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
              </span>

              <span className="hidden sm:block">
                <Link href="/search">
                  <a
                    className={`block border-b-4 border-${router.pathname.startsWith('/search') ? 'current' : 'transparent'} p-6 hover:border-red-700`}
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
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}