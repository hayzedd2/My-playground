import { StaticImageData } from "next/image";

export type ItemProp = {
  id: number;
  title: string;
  icon: React.ReactNode;
  description: React.ReactNode;
};

export type AlbumProp = {
  id: number;
  width: string;
};
export type ToolBarProp = {
  id: number;
  name: string;
  content : React.ReactNode | string
};


export type FilterProp= {
  name : string
  svg : React.ReactNode
  color : string
}