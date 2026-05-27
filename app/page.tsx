import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Advantages from '@/components/Advantages'
import FeaturedProperties from '@/components/FeaturedProperties'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'

/**
 * Home page — App Router Server Component.
 * All heavy sections are Server Components by default.
 * Only ContactForm (inside Contact) is a Client Component.
 */
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <ScrollReveal direction="none">
          <Hero />
        </ScrollReveal>
        <ScrollReveal>
          <Services />
        </ScrollReveal>
        <ScrollReveal direction="left">
          <Advantages />
        </ScrollReveal>
        <ScrollReveal>
          <FeaturedProperties />
        </ScrollReveal>
        <ScrollReveal direction="right">
          <Contact />
        </ScrollReveal>
      </main>
      <Footer />
    </>
  )
}

