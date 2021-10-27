import axios from "axios";
import { useCallback } from "react";

import { User } from "../types/api/user";

export const useAuth = () => {
  const login = useCallback((id: string) => {
    axios
      .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        if (res.data) {
        } else {
          alert("ユーザーが見つかりません");
        }
      });
  }, []);
  return { login };
};
