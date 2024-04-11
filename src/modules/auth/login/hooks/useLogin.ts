import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";
import { useCookies } from "react-cookie";

interface LoginParams {
  email: string;
  password: string;
}

export const useLogin = () => {

  const [cookies, setCookies] = useCookies();

  const { mutate, isError, isPending } = useMutation({
    mutationKey: ["login"],
    mutationFn: async ({ email, password }: LoginParams) => {
      const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
        { email, password });

      return data;
    },

    onSuccess: (data) => {
      setCookies("token", data.token);
      toast.success("Logged in successfully");
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });

  const handleSubmit = (values: LoginParams) => {
    mutate(values);
  }

  return {
    handleSubmit,
    isError,
    isPending,
  }
}