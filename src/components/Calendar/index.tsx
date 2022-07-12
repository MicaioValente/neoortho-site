import { Container } from "./styles";

import CalendarComponent from "./CalendarComponent";

const Calendar = ({ events }: any) => {
  return (
    <Container>
      <CalendarComponent events={events} />
    </Container>
  );
}

export default Calendar;