import { FaEnvelope } from "react-icons/fa"
import { Button } from "../ui/button"

const ContactButton = () => {
  return (
    <>
        <Button className="mt-4 w-full bg-[#51344D] hover:bg-[#6F5060]" onClick={
          () => window.location.href = "mailto:hello@siyangcobo.co.za"
        }>
            <FaEnvelope className="mr-2 h-4 w-4" /> Contact Me
        </Button>
    </>
  )
}

export default ContactButton