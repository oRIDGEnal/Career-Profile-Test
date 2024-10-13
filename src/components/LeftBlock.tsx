import { Card, CardContent } from './ui/card'
import ContactButton from './UserDetails/ContactButton'
import Socials from './UserDetails/Socials'
import UserDetails from './UserDetails/UserDetails'

const LeftBlock = () => {
  return (
    <div className="md:col-span-1">
        <Card>
            <CardContent className="p-6">
                <div className="flex flex-col items-center">
                <UserDetails
                    name="Siyabonga Ngcobo"
                    location="Durban, ZA"
                    hourlyRate={750}
                    imageSrc="/images/photo.jpg"
                />
                    <Socials />
                    <ContactButton />
                </div>
            </CardContent>
        </Card>
    </div>
  )
}

export default LeftBlock