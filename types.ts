
export type ProjectCategory = 'Residential' | 'Commercial' | 'Hospitality' | 'All';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  location: string;
  description: string;
  details: string;
  thumbnail: string;
  gallery: string[];
  materials?: string[];
  testimonial?: {
    quote: string;
    client: string;
  };
}

export interface NavItem {
  label: string;
  path: string;
}
