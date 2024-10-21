export interface Skill {
    id: number;
    name: string;
    level: string;
  }
  
  export interface Experience {
    id: number;
    company: string;
    position: string;
    start_date: string;
    end_date: string;
    description: string;
  }
  
  export interface Education {
    id: number;
    institution: string;
    degree: string;
    field_of_study: string;
    start_date: string;
    end_date: string;
  }
  
  export interface Certification {
    id: number;
    name: string;
    issuing_organization: string;
    issue_date: string;
    expiration_date: string;
  }
  
  export interface PortfolioItem {
    id: number;
    title: string;
    description: string;
    url: string;
  }
  
  export interface Review {
    id: number;
    client_id: number;
    rating: number;
    comment: string;
    created_at: string;
  }
  
  export interface SocialLink {
    id: number;
    platform: string;
    url: string;
  }
  
  export interface ProfileDetails {
    id: number;
    user_id: number;
    job_title: string;
    description: string;
    hourly_rate: number;
    bio: string;
    availability: string;
    city: string;
    state: string;
    country: string;
    skills: Skill[];
    experiences: Experience[];
    education: Education[];
    certifications: Certification[];
    portfolio_items: PortfolioItem[];
    reviews: Review[];
    social_links: SocialLink[];
    created_at: string;
    updated_at: string;
  }
  
  export interface Subscription {
    id: number;
    plan: string;
    start_date: string;
    end_date: string;
    is_active: boolean;
  }
  
  export interface FreelancerProfile {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    username: string;
    role: string;
    is_active: boolean;
    profile: ProfileDetails;
    subscription: Subscription;
  }