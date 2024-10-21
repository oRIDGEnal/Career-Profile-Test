import { FreelancerProfile, SocialLink } from "../../utils/types"
import profileData from "../../utils/freelancerProfile.json"
import { Button } from "../ui/button"
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Socials:React.FC = () => {
  const profile: FreelancerProfile = profileData as FreelancerProfile;
  const socialLinks = profile.profile.social_links;
  const platformIcons: Record<string, JSX.Element> = {
    linkedin: <FaLinkedin size={16} />,
    github: <FaGithub size={16} />
  };

  return (
    <div className="mt-4 flex space-x-2">
        {socialLinks.map((social: SocialLink) => (
            <a key={social.id} href={social.url} target="_blank" rel="noreferrer">
                <Button size="icon" variant="outline">
                    {platformIcons[social.platform.toLowerCase()]}
                </Button>
            </a>
      ))}
    </div>
  )
}

export default Socials