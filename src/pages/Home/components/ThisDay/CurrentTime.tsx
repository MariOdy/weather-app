import React from "react";
import { useTime } from "src/utils/useTime";
import addSeconds from "date-fns/addSeconds";

const options: Intl.DateTimeFormatOptions = {
  hour: "numeric",
  minute: "numeric",
};

interface CurrentTimeProps {
  locationUtcOffsetInSeconds: number;
}

const CurrentTime: React.FC<CurrentTimeProps> = ({
  locationUtcOffsetInSeconds = 0,
}) => {
  const currentTime = useTime(1000);

  const utcOffsetInSeconds = currentTime.getTimezoneOffset() * 60;

  const currentTimeAdjusted = addSeconds(
    currentTime,
    locationUtcOffsetInSeconds + utcOffsetInSeconds
  );
  const time = new Intl.DateTimeFormat("en-US", options).format(
    currentTimeAdjusted
  );

  return <div>Время: {time}</div>;
};

export default CurrentTime;
