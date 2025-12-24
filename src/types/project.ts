export type ProjectModel = {
  id: string;
  title: string;
  description: { lan: string; content: string }[];
  images: string[];
};
