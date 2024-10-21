import { useState } from 'react';
import { FaPencilAlt } from "react-icons/fa";
import { Card, CardContent } from '../ui/card';
import freelancerData from "../../utils/freelancerProfile.json";
import { FreelancerProfile } from '../../utils/types';

const AboutMe = () => {
  const FP: FreelancerProfile = freelancerData as FreelancerProfile;
  const [bio, setBio] = useState(FP.profile.bio);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">About Me</h2>
          <FaPencilAlt
            className="cursor-pointer text-gray-500"
            onClick={() => setIsEditing(!isEditing)}
          />
        </div>

        {isEditing ? (
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="mt-2 w-full p-2 border-2 border-gray-300 focus:border-gray-600 rounded-md text-sm"
            rows={4}
          />
        ) : (
          <p className="mt-2 text-muted-foreground">{bio}</p>
        )}
      </CardContent>
    </Card>
  );
};

export default AboutMe;
