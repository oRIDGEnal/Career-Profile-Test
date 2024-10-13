import { FaEnvelope } from "react-icons/fa"
import { Button } from "../ui/button"

/**
 * ContactButton Component
 * 
 * This component renders a button that, when clicked, opens the user's default email client
 * with a pre-filled recipient address.
 * 
 * @returns {JSX.Element} A button element with an envelope icon and "Contact Me" text
 */

const ContactButton = () => {
  return (
    <Button 
      className="mt-4 w-full bg-[#51344D] hover:bg-[#6F5060]" 
      onClick={() => window.location.href = "mailto:hello@siyangcobo.co.za"}
    >
      <FaEnvelope className="mr-2 h-4 w-4" /> Contact Me
    </Button>
  )
}

export default ContactButton