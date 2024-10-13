import { Card, CardContent } from '../ui/card'

const AboutMe = () => {
  return (
    <Card>
        <CardContent className="p-6">
            <h2 className="text-xl font-semibold">About Me</h2>
            <p className="mt-2 text-muted-foreground">
              I'm a passionate web developer with over 5 years of experience in creating responsive and user-friendly
              websites. My expertise lies in front-end development, but I also dabble in back-end technologies. I love
              taking on challenging projects and delivering high-quality results.
            </p>
        </CardContent>
    </Card>
  )
}

export default AboutMe