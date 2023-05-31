import axios from "../../utils/axios";

const updateSaved = async (id, npsaved) => {
    const response = await axios.patch(`/blogs/${id}`, {
        isSaved: !npsaved,
    });
    // console.log(response.data);
    return response.data;
};

export default updateSaved;
