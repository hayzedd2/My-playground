import { StaticImageData } from "next/image";

export type ItemProp = {
  id: number;
  title: string;
  icon: React.ReactNode;
  description: React.ReactNode;
};

export type AlbumProp = {
  id: number;
  image: StaticImageData;
  width: string;
};
export type ModifiedAlbumProp = {
  id: number;
  image: StaticImageData;
  width: string;
  percent: string | undefined;
};
