import { FaEnvelope } from "react-icons/fa"
import { Button } from "../ui/button"

const ContactButton = () => {
  return (
    <>
        <Button className="mt-4 w-full">
            <FaEnvelope className="mr-2 h-4 w-4" /> Contact Me
        </Button>
    </>
  )
}

export default ContactButton