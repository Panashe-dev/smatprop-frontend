import { FC, Fragment, useRef } from "react";
import { Scheduler } from "@aldabil/react-scheduler";
import type { SchedulerRef } from "@aldabil/react-scheduler/types";

interface SchedulerProps {}

const SchedulerSesion: FC<SchedulerProps> = () => {
  const calendarRef = useRef<SchedulerRef>(null);

  return (
    <Fragment>
      <Scheduler
        view="month"
        events={[
          {
            event_id: 1,
            title: "Event 1",
            start: new Date("2023/4/21 11:46"),
            end: new Date("2023/4/23 00:00"),
          },
        ]}
      />
    </Fragment>
  );
};
export default SchedulerSesion;
