import { Main } from '../components/Main'
import Link from 'next/link'

export default function FourOhFour() {
  return (
    <Main cssClass="flex flex-col place-items-center place-content-center p-8">
      <h1>404 - Page Not Found</h1>
      <Link href="/">
        <a>
          Go back home
        </a>
      </Link>
    </Main>
  )
}