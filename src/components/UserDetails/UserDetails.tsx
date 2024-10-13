import React from 'react';
import { FaMapPin } from "react-icons/fa";

interface UserDetailsProps {
  name: string;
  location: string;
  hourlyRate: number;
  imageSrc: string;
}

/**
 * UserDetails Component
 * 
 * This component displays my profile information including the photo,
 * name, location, and hourly rate.
 * 
 * @param {Object} props
 * @param {string} props.name - My full name
 * @param {string} props.location - My location
 * @param {number} props.hourlyRate - My hourly rate in Rands
 * @param {string} props.imageSrc - The source URL for my profile picture
 * 
 * @returns {JSX.Element} A section element containing my details
 * 
 */
const UserDetails: React.FC<UserDetailsProps> = ({ name, location, hourlyRate, imageSrc }) => {
  return (
    <section className="text-center">
      <img
        src={imageSrc}
        alt={`Profile picture of ${name}`}
        width={150}
        height={150}
        className="rounded-full mx-auto"
      />
      <h1 className="mt-4 text-2xl font-bold">{name}</h1>
      <p className="mt-2 flex items-center text-muted-foreground justify-center">
        <FaMapPin className="mr-2 h-4 w-4" aria-hidden="true" />
        <span>{location}</span>
      </p>
      <p className="mt-2 flex items-center justify-center font-semibold text-green-600">
        <span className="font-bold mr-1">Hourly Rate:</span>
        <span>R{hourlyRate}/hour</span>
      </p>
    </section>
  );
};

export default UserDetails;