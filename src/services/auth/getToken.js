import axios from 'axios'
import Cookies from 'js-cookie';

const baseUrl = process.env.NEXT_PUBLIC_URL;

const getToken = async () => {
  const res = await axios.post(
    `${baseUrl}/auth`,
    {
      email: process.env.NEXT_PUBLIC_EMAIL,
      password: process.env.NEXT_PUBLIC_PASSWORD,
      rememberMe: true
    }
  )

  const { token } = await res.data;

  Cookies.set('token', token, { expires: 7 })
}

export default getToken;