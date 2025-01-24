import axios from "axios";

export const uploadImage = async(image)=>{
  const formData = new FormData();
  formData.append('image', image);
  const { data } = await axios.post(
    `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`, formData
  );
  return data.data
}




// delete_url: "https://ibb.co/HXCy9HR/733c2979c3f3c87aa27c89e9aeeb02ae";
// display_url: "https://i.ibb.co/rv3hXwq/1712087140884-2.jpg";