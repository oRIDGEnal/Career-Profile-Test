import React, { useState } from 'react';
import { FaMapPin, FaPencilAlt  } from "react-icons/fa";
import freelancerData from "../../utils/freelancerProfile.json";
import { FreelancerProfile } from '../../utils/types';

const UserDetails: React.FC = () => {
  const profile: FreelancerProfile = freelancerData as FreelancerProfile;
  const pf = profile.profile;

  const [firstName, setFirstName] = useState(profile.first_name);
  const [lastName, setLastName] = useState(profile.last_name);
  const [jobTitle, setJobTitle] = useState(pf.job_title);
  const [city, setCity] = useState(pf.city);
  const [state, setState] = useState(pf.state);
  const [country, setCountry] = useState(pf.country);
  const [hourlyRate, setHourlyRate] = useState(pf.hourly_rate);

  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingJobTitle, setIsEditingJobTitle] = useState(false);
  const [isEditingLocation, setIsEditingLocation] = useState(false);
  const [isEditingRate, setIsEditingRate] = useState(false);

  return (
    <div className="text-center">
      <img
        src="images/photo.jpg"
        alt="Profile Picture"
        width={150}
        height={150}
        className="rounded-full mx-auto"
      />

      <div className="mt-4 flex justify-center items-center">
        {isEditingName ? (
          <>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="border-b-2 border-gray-300 focus:border-gray-600 mr-2 text-2xl font-bold text-center"
              style={{ maxWidth: '120px' }}
            />
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="border-b-2 border-gray-300 focus:border-gray-600 text-2xl font-bold text-center"
              style={{ maxWidth: '120px' }}
            />
          </>
        ) : (
          <h1 className="text-2xl font-bold">
            {`${firstName} ${lastName}`}
          </h1>
        )}
        <FaPencilAlt 
          className="ml-2 cursor-pointer text-gray-500"
          onClick={() => setIsEditingName(!isEditingName)}
        />
      </div>

      <div className="mt-2 flex justify-center items-center">
        {isEditingJobTitle ? (
          <input
            type="text"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            className="text-xl text-gray-600 border-b-2 border-gray-300 focus:border-gray-600 text-center"
            style={{ maxWidth: '200px' }}
          />
        ) : (
          <p className="text-xl text-gray-600">{jobTitle}</p>
        )}
        <FaPencilAlt 
          className="ml-2 cursor-pointer text-gray-500"
          onClick={() => setIsEditingJobTitle(!isEditingJobTitle)}
        />
      </div>

      <div className="mt-2 flex justify-center items-center space-x-4 text-muted-foreground">
        <FaMapPin className="text-gray-500" />
        {isEditingLocation ? (
          <div className="flex space-x-2">
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="border-b-2 border-gray-300 focus:border-gray-600 text-center"
              style={{ maxWidth: '80px' }}
            />
            <input
              type="text"
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="border-b-2 border-gray-300 focus:border-gray-600 text-center"
              style={{ maxWidth: '80px' }}
            />
            <input
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="border-b-2 border-gray-300 focus:border-gray-600 text-center"
              style={{ maxWidth: '100px' }}
            />
          </div>
        ) : (
          <span className="text-center">
            {city}, {state}, {country}
          </span>
        )}
        <FaPencilAlt 
          className="ml-2 cursor-pointer text-gray-500"
          onClick={() => setIsEditingLocation(!isEditingLocation)}
        />
      </div>

      {/* Editable Hourly Rate */}
      <div className="mt-2 flex items-center justify-center font-semibold text-green-600">
        <h6 className="font-bold mr-1">Hourly Rate:</h6>
        {isEditingRate ? (
          <input
            type="number"
            value={hourlyRate}
            onChange={(e) => setHourlyRate(Number(e.target.value))}
            className="border-b-2 border-gray-300 focus:border-gray-600 text-center w-20"
          />
        ) : (
          <span className="text-lg">${hourlyRate}/hour</span>
        )}
        <FaPencilAlt 
          className="ml-2 cursor-pointer text-gray-500"
          onClick={() => setIsEditingRate(!isEditingRate)}
        />
      </div>
    </div>
  );
};

export default UserDetails;
