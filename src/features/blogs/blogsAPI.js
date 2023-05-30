import axios from "../../utils/axios";

const getBlogs = async () => {
    const response = await axios.get("/blogs");

    return response.data;
};

export default getBlogs;
