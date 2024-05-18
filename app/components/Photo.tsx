"use client";

import { useEffect, useState } from "react";
import { fetchPhotos } from "./fetchPhotos";
interface photoProps {
  id: string;
  url: string;
}
const Photo = () => {
  const [photos, setPhotos] = useState<photoProps[]>();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchPhotosData = async () => {
      setIsLoading(true);
      try {
        setIsLoading(true);
        const fetchedPhotos = await fetchPhotos();
        if (fetchedPhotos) {
          setIsLoading(false);
          setPhotos(fetchedPhotos);
          console.log(fetchedPhotos);
        }
      } catch {
        console.log("An error occured");
      } finally {
        setIsLoading(false);
      }
    };
    fetchPhotosData();
  }, []);
  return (
    <section>
      {photos?.map((photo) => {
        return (
          <div key={photo.id}>
            <img src={photo.url} alt="" />
          </div>
        );
      })}
    </section>
  );
};

export default Photo;
