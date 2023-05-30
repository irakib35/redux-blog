import axios from "../../utils/axios";

const updateLikes = async (id, plikes) => {
    const response = await axios.patch(`/blogs/${id}`, {
        likes: plikes + 1,
    });
    // console.log(response.data);
    return response.data;
};

export default updateLikes;
