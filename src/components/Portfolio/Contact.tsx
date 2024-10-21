import { useState } from 'react';
import { FaEnvelope, FaMapPin, FaPencilAlt } from 'react-icons/fa';
import { Card, CardContent } from '../ui/card';
import freelanceData from "../../utils/freelancerProfile.json";
import { FreelancerProfile } from '../../utils/types';

const Contact = () => {
  const FP: FreelancerProfile = freelanceData as FreelancerProfile;

  const [email, setEmail] = useState(FP.email);
  const [city, setCity] = useState(FP.profile.city);
  const [country, setCountry] = useState(FP.profile.country);
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [isEditingLocation, setIsEditingLocation] = useState(false);

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Contact Information</h2>
        </div>
        <div className="mt-2 space-y-2">
          <div className="flex items-center">
            <FaEnvelope className="mr-2 h-4 w-4" />
            {isEditingEmail ? (
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-b-2 border-gray-300 focus:border-gray-600 p-1 rounded text-sm w-full"
              />
            ) : (
              <a href={`mailto:${email}`} className="text-primary hover:underline">
                {email}
              </a>
            )}
            <FaPencilAlt
              className="ml-2 cursor-pointer text-gray-500"
              onClick={() => setIsEditingEmail(!isEditingEmail)}
            />
          </div>

          <div className="flex items-center">
            <FaMapPin className="mr-2 h-4 w-4" />
            {isEditingLocation ? (
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="border-b-2 border-gray-300 focus:border-gray-600 p-1 rounded text-sm"
                />
                <input
                  type="text"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="border-b-2 border-gray-300 focus:border-gray-600 p-1 rounded text-sm"
                />
              </div>
            ) : (
              <span>{city}, {country}</span>
            )}
            <FaPencilAlt
              className="ml-2 cursor-pointer text-gray-500"
              onClick={() => setIsEditingLocation(!isEditingLocation)}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Contact;
