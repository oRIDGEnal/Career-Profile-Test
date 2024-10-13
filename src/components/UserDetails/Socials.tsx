import { SocialsData } from "../../utils/constants"
import { Button } from "../ui/button"

const Socials = () => {
  return (
    <div className="mt-4 flex space-x-2">
        {SocialsData.map((social: any) => (
            <a 
                key={social.id} 
                href={social.link} 
            >
                <Button size="icon" variant="outline">
                    <social.icon  size={"icon"} className="h-4 w-4" />
                </Button>
            </a>
        ))}
    </div>
  )
}

export default Socials