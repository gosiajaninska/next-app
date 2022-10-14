import { Footer } from "../components/Footer"
import { Header } from "../components/Header"

const About = () => {
  return (
    <div className="container md:px-4 flex flex-col bg-green-300 min-h-screen">
      <Header></Header>
      <main className="bg-green-500 flex-grow">
        <div className="p-4">
          <h1>About</h1>
        </div>
      </main>
      <Footer></Footer>
    </div>
  )
}

export default About
