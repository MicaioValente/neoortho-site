import { useEffect, useState } from "react";

import { Container } from "./styles";

import Calendar from "../../../components/Calendar";
import Event from "../../../components/Event";

import { getEvents } from "../../../services/home";

const MainEvent = ({ token, post }) => {

  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const events = await getEvents(token);
      setData(events);
    })()
  }, [token])

  return (
    <Container>
      <Calendar events={data} />
      {data[0]?.events[0] && (
        <Event post={data[0]?.events[0]} />
      )}
    </Container>
  );
}

export default MainEvent;