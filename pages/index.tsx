import { Header } from "../components/Header"
import { Main } from "../components/Main"
import { Product } from "../components/Product"
import { Footer } from "../components/Footer"

const DATA = {
  name: "Consectetur adipiscing",
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla gravida elit nec ipsum condimentum lacinia. Aenean fringilla ipsum vitae tortor mollis, at efficitur diam porttitor. Phasellus rutrum odio libero, at sollicitudin est hendrerit nec. Pellentesque magna purus, convallis a mauris quis, sollicitudin ornare justo. Suspendisse vitae mi ac purus rhoncus imperdiet. Duis diam arcu, pretium in sem eget, tristique semper lacus. Aenean egestas diam eu eros mattis, nec maximus metus fermentum. Vivamus nec mi sem. Duis fermentum iaculis turpis id iaculis. Etiam facilisis ante tortor, et consectetur lectus fermentum at. Mauris consectetur eros sit amet sapien efficitur imperdiet. Aenean ac mauris elementum, tempor ipsum nec, accumsan ante. Donec pretium, felis vel rutrum iaculis, odio nulla auctor tortor, non fermentum lacus urna vel nulla. Vivamus in mi non orci aliquam convallis. Sed malesuada sagittis pretium. Mauris fringilla purus vel lectus rutrum, a dapibus elit tristique.",
  imgUrl: "https://picsum.photos/500",
  imgAlt: "",
  rating: 4.9,
}

const Home = () => {
  return (
    <>
      <Header></Header>
      <Main>
        <Product desc={DATA.desc} name={DATA.name} imgUrl={DATA.imgUrl} imgAlt={DATA.imgAlt} rating={DATA.rating} />
      </Main>
      <Footer></Footer>
    </>
  )
}

export default Home
