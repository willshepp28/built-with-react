import React, { useEffect, useState } from "react";
import { format } from "date-fns";

export default function IOSBarLeft() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // 60000 milliseconds = 1 minute

    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = format(currentTime, "h:mm a");

  return <p>{formattedTime}</p>;
}
