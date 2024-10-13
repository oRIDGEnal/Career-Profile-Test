import { Card, CardContent } from '../ui/card'
import { SkillsData } from '../../utils/constants'
import { Badge } from '../ui/badge'

const Skills = () => {
  return (
    <Card>
        <CardContent className="p-6">
            <h2 className="text-xl font-semibold">Skills</h2>
            <div className="mt-2 flex flex-wrap gap-2">
                {SkillsData.map((skill) => (
                    <Badge 
                        key={skill.id} 
                        className="text-xs font-medium bg-[#6F5060] hover:bg-[#A78682] cursor-pointer"
                    >
                        {skill.label}
                    </Badge>
                ))}
            </div>
        </CardContent>
    </Card>
  )
}

export default Skills
