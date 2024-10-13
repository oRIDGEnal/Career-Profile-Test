import { FaEnvelope, FaMapPin } from 'react-icons/fa'
import { Card, CardContent } from '../ui/card'

const Contact = () => {
  return (
    <Card>
        <CardContent className="p-6">
            <h2 className="text-xl font-semibold">Contact Information</h2>
            <div className="mt-2 space-y-2">
                <p className="flex items-center">
                    <FaEnvelope className="mr-2 h-4 w-4" />
                    <a 
                        href="mailto:hello@siyangcobo.co.za" 
                        className="text-primary hover:underline"
                    >
                        hello@siyangcobo.co.za
                    </a>
                </p>
                <p className="flex items-center">
                    <FaMapPin className="mr-2 h-4 w-4" />
                    <span>Durban, ZA</span>
                </p>
            </div>
        </CardContent>
    </Card>
  )
}

export default Contact