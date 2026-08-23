import AboutMeCard from '@/components/sections/AboutMeCard';
import Projects from '@/components/sections/Projects';
import Blogs from '@/components/sections/Blogs';
import Contact from '@/components/sections/Contact';
import Home from '@/components/sections/Home';
import DemosSection from '@/components/sections/DemosSection';

export const componentRegistry: Record<string, React.FC<any>> = {
  AboutMeCard,
  Projects,
  Blogs,
  Contact,
  Home,
  DemosSection,
  Demos: DemosSection,
};

// Alias export for backward compatibility if referenced as componentMap
export const componentMap = componentRegistry;
