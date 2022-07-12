import axios from 'axios'

const baseUrl = process.env.NEXT_PUBLIC_URL;

const getEvents = async (token) => {

  const res = await axios.get(
    `${baseUrl}/event`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  )

  return res.data;
}

export { getEvents };