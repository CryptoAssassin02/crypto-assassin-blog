import Hero from "./components/Hero"
import AboutSection from "./components/AboutSection"
import ArticlesSection from "./components/ArticlesSection"
import ProjectVideos from "./components/ProjectVideos"
import CTASection from "./components/CTASection"

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ArticlesSection />
      <ProjectVideos />
      <CTASection />
    </>
  )
}

