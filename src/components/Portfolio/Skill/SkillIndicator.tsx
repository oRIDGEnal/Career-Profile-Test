import { Star } from "lucide-react"

interface SkillIndicatorProps {
  skill: string
  level: number
}

export default function Component({ skill, level }: SkillIndicatorProps) {
  const maxStars = 5
  const filledStars = Math.min(Math.max(level, 0), maxStars)

  return (
    <div className="flex flex-row gap-4 items-center p-2">
      <span className="font-medium text-sm mb-1">{skill}</span>
      <div className="flex" aria-label={`Skill level: ${filledStars} out of ${maxStars}`}>
        {[...Array(maxStars)].map((_, index) => (
          <Star
            key={index}
            className={`w-4 h-4 ${
              index < filledStars ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
            }`}
            aria-hidden="true"
          />
        ))}
      </div>
    </div>
  )
}