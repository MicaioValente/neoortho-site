import { useState } from "react";

import { Container } from "./styles";

import moment from "moment";

const CalendarComponent = ({ events }: any) => {

  const [month, setMonth] = useState(moment());
  const [selected, setSelected] = useState(moment().startOf('day'));

  const previous = () => {
    setMonth(month.subtract(1, 'month'));
    console.log(month);
  }

  const next = () => {
    setMonth(month.add(1, 'month'))
    console.log(month);
  }


  const select = (day: any) => {
    setSelected(day.date);
    setMonth(day.date.clone());
  }

  const renderWeeks = () => {
    let weeks: any[] = [];
    let done = false;
    let date = month.clone().startOf("month").add(-1, "w").day("Sunday");
    let count = 0;
    let monthIndex = date.month();

    while (!done) {
      weeks.push(
        <Week key={date}
          date={date.clone()}
          month={month}
          select={(day: any) => select(day)}
          selected={selected} />
      );

      date.add(1, "w");

      done = count++ > 2 && monthIndex !== date.month();
      monthIndex = date.month();
    }

    return weeks;
  }

  const renderMonthLabel = () => {
    return <span className="month-label">{month.format("MMMM YYYY")}</span>;
  }

  return (
    <Container>
      <section className="calendar">
        <header className="header">
          <div className="month-display row">
            <i className="arrow fa fa-angle-left" onClick={previous} />
            {renderMonthLabel()}
            <i className="arrow fa fa-angle-right" onClick={next} />
          </div>
          <DayNames />
        </header>
        {renderWeeks()}
      </section>
    </Container>
  );
}

const DayNames = () => {
  return (
    <div className="row day-names">
      <span className="day">Domingo</span>
      <span className="day">Segunda</span>
      <span className="day">Terça</span>
      <span className="day">Quarta</span>
      <span className="day">Quinta</span>
      <span className="day">Sexta</span>
      <span className="day">Sábado</span>
    </div>
  );
}

const Week = (props: any) => {

  let days: any[] = [];
  let { date } = props;
  const { month, selected, select } = props;

  for (var i = 0; i < 7; i++) {
    let day = {
      name: date.format("dd").substring(0, 1),
      number: date.date(),
      isCurrentMonth: date.month() === month.month(),
      isToday: date.isSame(new Date(), "day"),
      date: date
    };
    days.push(
      <Day day={day}
        selected={selected}
        select={select} />
    );

    date = date.clone();
    date.add(1, "day");
  }

  return (
    <div className="row week" key={days[0]}>
      {days}
    </div>
  );
}

const Day = (props: { day: any, select: Function, selected: moment.Moment }) => {

  const { day, day: { date, isCurrentMonth, isToday, number }, select, selected } = props;

  return (
    <span
      key={date.toString()}
      className={"day" + (isToday ? " today" : "") + (isCurrentMonth ? "" : " different-month") + (date.isSame(selected) ? " selected" : "")}
      onClick={() => select(day)}>{number}</span>
  );
}

export default CalendarComponent;