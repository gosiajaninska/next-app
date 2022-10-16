import { ReactNode } from "react"

interface MainProps {
  children: ReactNode,
  cssClass?: string,
}

export const Main = ({ children, cssClass }: MainProps) => {
  return (
    <main className="flex-grow flex min-h-screen -mt-20 pt-20 relative z-0">
      <div className={`flex-grow ${cssClass != undefined ? cssClass : ""}`}>
        {children}
      </div>
    </main>
  )
}
