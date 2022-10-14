import { Main } from "../components/Main"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"

const About = () => {
  return (
    <div className="container md:px-4 flex flex-col bg-green-300 min-h-screen">
      <Header></Header>
      <Main><h1>About</h1></Main>
      <Footer></Footer>
    </div>
  )
}

export default About
