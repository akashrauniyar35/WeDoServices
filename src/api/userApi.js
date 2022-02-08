import axios from "axios";

const rootUrl = "https://wedo-backend.herokuapp.com/v1"
const loginUrl = rootUrl + "customer/login"
const userProfileUrl = ""
const logoutUrl = ""


export const userLogin = (frmData) => {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await axios.post(loginUrl, frmData);

            resolve(res.data);

            if (res.data.status === "success") {
                // sessionStorage.setItem("accessJWT", res.data.accessJWT);
                console.log(res.data.accessJWT)
                // localStorage.setItem(
                //     "crmSite",
                //     JSON.stringify({ refreshJWT: res.data.refreshJWT })
                // );
            }
        } catch (error) {
            reject(error);
        }
    });
};