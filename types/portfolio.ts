export interface CaseStudyDetails {
  problem: string;
  architecture: string;
  challenges: string[];
  metrics: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  desc: string;
  tech: string[];
  images: string[];
  videoUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  caseStudy?: CaseStudyDetails;
}

export interface ProjectsProps {
  initialProjectId?: string | null;
}

export interface BlogsProps {
  initialBlogId?: string | null;
}

export interface ComponentContextMap {
  [key: string]: string;
}

