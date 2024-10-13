import AboutMe from './Portfolio/AboutMe'
import Skills from './Portfolio/Skills'
import Portfolio from './Portfolio/Portfolio'
import Contact from './Portfolio/Contact'
import { ProjectData, SkillsData } from '../utils/constants'

const RightBlock = () => {
  return (
    <div className="space-y-8 md:col-span-2">
        <AboutMe 
            title={'About Me'} 
            content={
                `
                I'm a passionate web developer with over 5 years of experience in creating responsive and user-friendly
                websites. My expertise lies in front-end development, but I also dabble in back-end technologies. I love
                taking on challenging projects and delivering high-quality results.
                `
            } 
        />
        <Skills 
            title="Skills" 
            skills={SkillsData}
        />
        <Portfolio 
            title="Portfolio" 
            projects={ProjectData} 
        />
        <Contact
            title="Contact Information"
            contactInfo={{
                email: "hello@siyangcobo.co.za",
                location: "Durban, ZA"
            }}
        />
    </div>
  )
}

export default RightBlock