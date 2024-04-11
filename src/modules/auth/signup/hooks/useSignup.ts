import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useCookies } from "react-cookie";
import { toast } from "sonner";

interface SignupParams {
  username: string;
  email: string;
  password: string;
}

export const useSignup = () => {

  const [cookies, setCookies] = useCookies();

  const { mutate, isError, isPending } = useMutation({
    mutationKey: ["signup"],
    mutationFn: async ({ username, email, password }: SignupParams) => {
      const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`,
        { username, email, password },
      );

      return data;
    },

    onSuccess: (data) => {
      setCookies("token", data.token);
      toast.success("Signed up successfully");
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });

  const handleSubmit = (values: SignupParams) => {
    mutate(values);
  }

  return {
    handleSubmit,
    isError,
    isPending,
  }
}