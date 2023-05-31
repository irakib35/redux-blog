import axios from "../../utils/axios";

const getRelatedPost = async (currentId, tags) => {
    let queryString = "";

    if (tags?.length > 0) {
        queryString = tags.map((tag) => `tags_like=${tag}`).join("&");
    }

    queryString += `&id_ne=${currentId}`;
    const response = await axios.get(`/blogs?${queryString}`);
    return response.data;
};

export default getRelatedPost;
