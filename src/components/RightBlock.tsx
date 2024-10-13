import AboutMe from './Portfolio/AboutMe'
import Skills from './Portfolio/Skills'
import Portfolio from './Portfolio/Portfolio'
import Contact from './Portfolio/Contact'

const RightBlock = () => {
  return (
    <div className="space-y-8 md:col-span-2">
        <AboutMe />
        <Skills />
        <Portfolio />
        <Contact />
    </div>
  )
}

export default RightBlock