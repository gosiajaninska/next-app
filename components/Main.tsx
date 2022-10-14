import { ReactNode } from "react"

interface MainProps {
  children: ReactNode
}

export const Main = ({ children }: MainProps) => {
  return (
    <main className="bg-yellow-200 flex-grow grid md:grid-cols-2 items-center">
      {children}
    </main>
  )
}
