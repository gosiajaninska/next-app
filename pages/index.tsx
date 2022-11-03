import Link from "next/link"
import { Main } from "../components/Main"

const HomePage = () => {
  return (
    <Main cssClass="flex place-items-center p-8">
      <div className="mx-auto max-w-xl text-center">
        <h1 className="text-3xl font-extrabold sm:text-5xl">
          Understand User Flow.
          <strong className="font-extrabold text-slate-700 sm:block">
            Increase Conversion.
          </strong>
        </h1>

        <p className="mt-4 sm:text-xl sm:leading-relaxed">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
          tenetur fuga ducimus numquam ea aaajdiajsdias!
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/products">
            <a className="block w-full rounded bg-black px-12 py-3 text-sm font-medium text-white shadow hover:bg-slate-700 focus:outline-none focus:ring active:bg-slate-500 sm:w-auto">
              Get Started
            </a>
          </Link>

          <Link href="/about">
            <a className="block w-full rounded px-12 py-3 text-sm font-medium text-slate-600 shadow hover:text-slate-700 focus:outline-none focus:ring active:text-slate-500 sm:w-auto">
              Learn More
            </a>
          </Link>
        </div>
      </div>
    </Main>
  )
}

export default HomePage
