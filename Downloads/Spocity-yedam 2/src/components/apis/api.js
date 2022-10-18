import axios from "axios";

// axios
export const ScoreCount = async (url,setState) => {
    return await axios.get(process.env.REACT_APP_DB_HOST + url).then(res=> setState(res?.data?.data)).catch(err => console.log(err))
};
  
