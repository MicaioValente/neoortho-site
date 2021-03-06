import { useEffect, useState } from "react";

import { Container } from "./styles";

import Post from "../Post";

import { getEvents } from "../../services/home";

import dayOfMonth from "../../utils/dayOfMonth";
import getHours from "../../utils/getHours";

const Posts = ({ posts, id, token }) => {

  const [data, setData] = useState([]);

  useEffect(() => {
    // (async () => {
    //   const events = await getEvents(token);
    //   setData(events);
    // })()

    setData(posts);

  }, [token, posts])

  return (
    <Container id={id}>
      <div>
        {data?.map(({ events }, index) => (
          (id !== 'events') ? (
            (index < 3) && (
              <Post
                key={index}
                date={{
                  day: dayOfMonth(events[0].beginDate),
                  hour: getHours(events[0].beginDate, events[0].endDate)
                }}
                title={events[0].name}
                text={events[0].resumo}
                tag={events[0].slug}
              />
            )
          ) : (
            <Post
              key={index}
              date={{
                day: dayOfMonth(events[0].beginDate),
                hour: getHours(events[0].beginDate, events[0].endDate)
              }}
              title={events[0].name}
              text={events[0].resumo}
              tag={events[0].slug}
            />
          )
        ))}
      </div>
    </Container>
  );
}

export default Posts;