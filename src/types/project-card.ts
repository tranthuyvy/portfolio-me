import { TagEnum } from './tags';

// ------------------------------------------------------------

export interface ProjectCardType {
  title: string;
  description: string;
  tags: TagEnum[];
  banner: string;
  demoLink?: string;
  link: string;
}
