import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Advantages from '@/components/Advantages'
import FeaturedProperties from '@/components/FeaturedProperties'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export const revalidate = 3600

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Advantages />
        <FeaturedProperties />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

