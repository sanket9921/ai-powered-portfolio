export interface CaseStudyDetails {
  problem: string;
  architecture: string;
  challenges: string[];
  metrics: string[];
}

export interface ProjectItem {
  title: string;
  desc: string;
  tech: string[];
  images: string[];
  videoUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  caseStudy?: CaseStudyDetails;
}

export interface ComponentContextMap {
  [key: string]: string;
}
