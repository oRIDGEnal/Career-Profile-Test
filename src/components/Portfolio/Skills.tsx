import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';

interface Skill {
  id: string;
  label: string;
}

interface SkillsProps {
  title?: string;
  skills: Skill[];
  badgeClassName?: string;
}

/**
 * Skills Component
 * 
 * This component displays a list of skills within a Card component.
 * Each skill is represented by a Badge component.
 * 
 * @param {Object} props
 * @param {string} [props.title="Skills"] - The title of the skills section
 * @param {Skill[]} props.skills - Array of skill objects to display
 * @param {string} [props.badgeClassName] - Additional CSS classes for the Badge components
 * 
 * @returns {JSX.Element} A Card component containing a list of skill badges
 */
const Skills: React.FC<SkillsProps> = ({ 
  title = "Skills", 
  skills, 
  badgeClassName = "text-xs font-medium bg-[#6F5060] hover:bg-[#A78682]" 
}) => {
  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="text-xl font-semibold" id="skills-title">{title}</h2>
        <div 
          className="mt-2 flex flex-wrap gap-2"
          aria-labelledby="skills-title"
        >
          {skills.map((skill) => (
            <Badge 
              key={skill.id} 
              className={`${badgeClassName} cursor-default`}
            >
              {skill.label}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Skills;