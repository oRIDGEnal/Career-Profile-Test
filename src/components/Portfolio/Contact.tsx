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
                <a href="mailto:jane.doe@example.com" className="text-primary hover:underline">
                jane.doe@example.com
                </a>
            </p>
            <p className="flex items-center">
                <FaMapPin className="mr-2 h-4 w-4" />
                <span>New York, USA</span>
            </p>
            </div>
        </CardContent>
    </Card>
  )
}

export default Contact