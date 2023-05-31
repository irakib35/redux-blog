import axios from "../../utils/axios";

const getBlogs = async (sort, filter) => {
    let queryString = "";

    if (sort === "newest") queryString += "?_sort=createdAt&_order=asc";
    else if (sort === "most_liked") queryString += "?_sort=likes&_order=desc";
    else queryString += "?_sort=id&_order=asc";

    queryString += filter === "All" ? "" : "&isSaved=true";

    console.log(queryString);
    const response = await axios.get(`/blogs${queryString}`);

    return response.data;
};

export default getBlogs;
