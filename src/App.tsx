import { About } from './components/About'
import { Background } from './components/Background'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { Products } from './components/Products'
import { Statement } from './components/Statement'
import { Videos } from './components/Videos'

export default function App() {
  return (
    <>
      <Background />
      <Nav />
      <main>
        <Hero />
        <Statement />
        <About />
        <Products />
        <Videos />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
