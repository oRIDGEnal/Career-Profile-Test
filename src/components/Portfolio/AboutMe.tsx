import React from 'react';
import { Card, CardContent } from '../ui/card';

interface AboutMeProps {
  title?: string;
  content: string;
}

/**
 * AboutMe Component
 * 
 * This component displays an "About Me" section within a Card component.
 * It includes a title and a paragraph of content describing the user.
 * 
 * @param {Object} props
 * @param {string} [props.title="About Me"] - The title of the section
 * @param {string} props.content - The content of the About Me section
 * 
 * @returns {JSX.Element} A Card component containing the About Me information
 */
const AboutMe: React.FC<AboutMeProps> = ({ title = "About Me", content }) => {
  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="text-xl font-semibold" id="about-me-title">{title}</h2>
        <p className="mt-2 text-muted-foreground" aria-labelledby="about-me-title">
          {content}
        </p>
      </CardContent>
    </Card>
  );
};

export default AboutMe;