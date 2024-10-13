import { SocialsData } from "../../utils/constants"
import { Button } from "../ui/button"

/**
 * Socials Component
 * 
 * This component renders a list of social media buttons based on the data
 * provided in the SocialsData array from constants.
 * 
 * @returns {JSX.Element} A nav element containing a list of social media buttons
 */

const Socials: React.FC = () => {
    return (
        <nav className="mt-4">
          <ul className="flex space-x-2">
            {SocialsData.map((social: any) => (
              <li key={social.id}>
                <a 
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${social.id}`}
                >
                  <Button size="icon" variant="outline">
                    <social.icon size="1em" className="h-4 w-4" />
                  </Button>
                </a>
              </li>
            ))}
          </ul>
        </nav>
    );
}

export default Socials