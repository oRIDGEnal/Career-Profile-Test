import React from 'react';
import { FaEnvelope, FaMapPin } from 'react-icons/fa';
import { Card, CardContent } from '../ui/card';

interface ContactInfo {
  email: string;
  location: string;
}

interface ContactProps {
  title?: string;
  contactInfo: ContactInfo;
}

/**
 * Contact Component
 * 
 * This component displays contact information within a Card component.
 * It includes an email address and location, each with an associated icon.
 * 
 * @param {Object} props
 * @param {string} [props.title="Contact Information"] - The title of the section
 * @param {ContactInfo} props.contactInfo - Object containing email and location
 * 
 * @returns {JSX.Element} A Card component containing the contact information
 */

const Contact: React.FC<ContactProps> = ({ title = "Contact Information", contactInfo }) => {
  const { email, location } = contactInfo;

  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="text-xl font-semibold" id="contact-info-title">{title}</h2>
        <div className="mt-2 space-y-2" aria-labelledby="contact-info-title">
          <p className="flex items-center">
            <FaEnvelope className="mr-2 h-4 w-4" aria-hidden="true" />
            <a 
              href={`mailto:${email}`}
              className="text-primary hover:underline"
              aria-label={`Send email to ${email}`}
            >
              {email}
            </a>
          </p>
          <p className="flex items-center">
            <FaMapPin className="mr-2 h-4 w-4" aria-hidden="true" />
            <span>{location}</span>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Contact;