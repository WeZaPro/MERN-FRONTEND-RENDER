import axios from "axios";
axios.defaults.withCredentials = true;

export const register = async (value) => {
  try {
    await axios.post(process.env.REACT_APP_API + "/signup", value);
    //await axios.post("http://localhost:5000/api/signup", value);
    alert("Create User : Success");
    return true;
  } catch (err) {
    console.log("err---> ", err.response.data);
    // ดึง Error จาก Backend มาแจ้งเตือน
    alert(err.response.data);
  }
};
