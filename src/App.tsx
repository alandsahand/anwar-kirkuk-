import { About } from './components/About'
import { Background } from './components/Background'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Marquee } from './components/Marquee'
import { Nav } from './components/Nav'
import { Products } from './components/Products'
import { Services } from './components/Services'
import { Specs } from './components/Specs'
import { Statement } from './components/Statement'
import { Videos } from './components/Videos'
import { useLang } from './i18n'

export default function App() {
  const { lang } = useLang()
  return (
    // key forces scroll-linked sections to re-measure when the direction changes
    <div key={lang}>
      <Background />
      <Nav />
      <main>
        <Hero />
        <Specs />
        <Marquee />
        <Statement />
        <About />
        <Services />
        <Products />
        <Videos />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
