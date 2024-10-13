import React from 'react';
import { Card, CardContent } from '../ui/card';

interface Project {
  id: number;
  imageUrl: string;
  title: string;
}

interface PortfolioProps {
  title?: string;
  projects: Project[];
}

/**
 * Portfolio Component
 * 
 * This component displays a grid of project images within a Card component.
 * 
 * @param {Object} props
 * @param {string} [props.title="Portfolio"] - The title of the portfolio section
 * @param {Project[]} props.projects - Array of project objects to display
 * 
 * @returns {JSX.Element} A Card component containing a grid of project images
 */

const Portfolio: React.FC<PortfolioProps> = ({ title = "Portfolio", projects }) => {
  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="text-xl font-semibold" id="portfolio-title">{title}</h2>
        <div 
          className="mt-4 grid gap-4 grid-cols-2 lg:grid-cols-4"
          aria-labelledby="portfolio-title"
        >
          {projects.map(project => (
            <div key={project.id} className="overflow-hidden rounded-lg">
              <img
                src={project.imageUrl}
                alt={project.title}
                width={300}
                height={200}
                className="transition-transform duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Portfolio;