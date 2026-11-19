export interface Work {
  id: string;
  name: string;
  category: string;
  description: string;
  price: string | number;
  materials: string;
  duration: string;
  story: string;
  cover: string;
  gallery: string[];
  video: string;
  bilibiliUrl: string;
  xianyuUrl: string;
  featured: boolean;
  order: number;
}
export const works: Work[] = [];
