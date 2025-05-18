export type Image = {
  id: string;
  alt_description: string;
  description: string | null;
  likes: number;
  urls: {
    small: string;
    regular: string;
  };
  width: number;
  height: number;
  user: {
    name: string;
  };
};
