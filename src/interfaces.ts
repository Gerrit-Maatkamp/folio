export interface Step {
  heading: string;
  paragraph: string;
  images: string[]; 
}

export interface ProjectItem {
  id: string;
  name: string;
  summary?: string;
  imageUrl?: string;
  steps?: Step[]; 
  prototype?: string;
  prototypeHeader?: string;
  prototypeText?: string;
  url?: string;
}