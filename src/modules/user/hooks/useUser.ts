import { useQuery } from "@tanstack/react-query"
import axios from "axios";
import { useCookies } from "react-cookie";

export const useUser = () => {

  const [cookies, setCookies] = useCookies();

  console.log(cookies.token)

  const { data, isError, isFetched } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/get-user`, {
        headers: {
          Authorization: `Bearer ${cookies.token}`
        }
      });
      return data;
    },
  })

  return {
    user: data,
    isError,
    isFetched,
  }

}