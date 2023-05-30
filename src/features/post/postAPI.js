import axios from "../../utils/axios";

const getBlogs = async (id) => {
    const response = await axios.get(`/blogs/${id}`);

    return response.data;
};

export default getBlogs;
