import axios from "axios";
import { setCookie } from "../cookies/cookies";

const postLogin = async ({ email, password }) => {
  try {
    const response = await axios.post("http://localhost:4000/login", {
      email,
      password,
    });

    if (response.status === 201) {
      setCookie("token", response.data.token, {
        path: "/",
        secure: true,
        maxAge: 3000,
      });

      alert("로그인 되었습니다.");
    }
  } catch (error) {
    console.error("로그인 실패", error);
    // alert("이메일 혹은 비밀번호를 확인하세요.");
  }
};

export { postLogin };
