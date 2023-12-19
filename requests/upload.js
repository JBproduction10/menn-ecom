import axios from 'axios';
export const uploadImages = async (FormData) =>{
    const {data} = await axios.post("/api/cloudinary", FormData,{
        headers:{
            "content-type": "multipart/form-data",
        }
    });
    return data;
};