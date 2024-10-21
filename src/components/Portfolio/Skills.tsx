import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import freelanceData from "../../utils/freelancerProfile.json";
import { FreelancerProfile, Skill } from '../../utils/types';
import SkillIndicator from './Skill/SkillIndicator';

const Skills: React.FC = () => {
  const FP: FreelancerProfile = freelanceData;
  const freelancerSkills = FP.profile.skills;

  const levelMapping: Record<string, number> = {
    Expert: 3,
    Intermediate: 2,
    Beginner: 1,
  };

  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="text-xl font-semibold">Skills</h2>
        <div className="mt-2 flex flex-col lg:flex-row lg:flex-wrap gap-2">
          {freelancerSkills.map((skill: Skill) => (
            <Badge key={skill.id} className="flex flex-wrap justify-center gap-4 bg-[#51344D] hover:bg-[#6F5060]">
              <SkillIndicator 
                skill={skill.name} 
                level={levelMapping[skill.level] || 0}
              />
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Skills;
