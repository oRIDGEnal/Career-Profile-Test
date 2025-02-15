import { FaEnvelope } from "react-icons/fa"
import { Button } from "../ui/button"
import freelanceData from "../../utils/freelancerProfile.json"
import { FreelancerProfile } from "../../utils/types";

const ContactButton = () => {
  const FP: FreelancerProfile = freelanceData as FreelancerProfile;

  return (
    <>
        <Button className="mt-4 w-full bg-[#51344D] hover:bg-[#6F5060]" onClick={
          () => window.open(`mailto:${FP.email}`)
        }>
            <FaEnvelope className="mr-2 h-4 w-4" /> Contact Me
        </Button>
    </>
  )
}

export default ContactButton