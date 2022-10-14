import { Header } from "../../components/Header"
import { Main } from "../../components/Main"
import { Footer } from "../../components/Footer"

const Users = () => {
  return (
    <div className="container md:px-4 flex flex-col bg-green-300 min-h-screen">
      <Header></Header>

      <Main>
        <h1>Users</h1>
      </Main>

      <Footer></Footer>
    </div>
  )
}

export default Users
