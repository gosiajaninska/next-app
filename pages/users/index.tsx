import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"

const Users = () => {
  return (
    <div className="container md:px-4 flex flex-col bg-green-300 min-h-screen">
      <Header></Header>
      <main className="bg-yellow-200 flex-grow">
        <div className="p-4">
          <h1>Users</h1>
        </div>
      </main>
      <Footer></Footer>
    </div>
  )
}

export default Users
