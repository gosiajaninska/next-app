import { Footer } from "../components/Footer"
import { Header } from "../components/Header"

const Home = () => {
  return (
    <div className="container md:px-4 flex flex-col bg-green-300 min-h-screen">
      <Header></Header>
      <main className="bg-yellow-200 flex-grow grid md:grid-cols-2 items-center">
        <img className="object-cover w-full h-full" src="https://picsum.photos/500" alt="" />
        <div className="p-4">
          <h1>Consectetur adipiscing</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla gravida elit nec ipsum condimentum lacinia. Aenean fringilla ipsum vitae tortor mollis, at efficitur diam porttitor. Phasellus rutrum odio libero, at sollicitudin est hendrerit nec. Pellentesque magna purus, convallis a mauris quis, sollicitudin ornare justo. Suspendisse vitae mi ac purus rhoncus imperdiet. Duis diam arcu, pretium in sem eget, tristique semper lacus. Aenean egestas diam eu eros mattis, nec maximus metus fermentum. Vivamus nec mi sem. Duis fermentum iaculis turpis id iaculis. Etiam facilisis ante tortor, et consectetur lectus fermentum at. Mauris consectetur eros sit amet sapien efficitur imperdiet. Aenean ac mauris elementum, tempor ipsum nec, accumsan ante. Donec pretium, felis vel rutrum iaculis, odio nulla auctor tortor, non fermentum lacus urna vel nulla. Vivamus in mi non orci aliquam convallis. Sed malesuada sagittis pretium. Mauris fringilla purus vel lectus rutrum, a dapibus elit tristique.</p>
        </div>
      </main>
      <Footer></Footer>
    </div>
  )
}

export default Home
