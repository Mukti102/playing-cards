import React from "react";

function FormatStopwatch(props) {
  const { format, time, minute, hour } = props;
  return (
    <div className="w-max h-max  font-semibold text-white md:text-3xl text-xl">
      {format(time, minute, hour)}
    </div>
  );
}

export default FormatStopwatch;
