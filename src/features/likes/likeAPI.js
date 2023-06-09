import axios from "../../utils/axios";

const updateLikes = async (id, nplikes) => {
    const response = await axios.patch(`/blogs/${id}`, {
        likes: nplikes + 1,
    });
    // console.log(response.data);
    return response.data;
};

export default updateLikes;
