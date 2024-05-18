

export const fetchPhotos = async () => {
const url ="https://api.unsplash.com/search/photos?query=nature"
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    if (!response.ok) {
      console.log({ error: "Something went wrong" });
    }
    const photos = await response.json();
    console.log(photos);
    return photos;
  } catch (err) {
    console.log(err);
  }
};
