import React from "react";
import { useState } from "react";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

const DateRangeComponent = () => {
  const [range, setRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (item) => {
    console.log(item.selection);
    setRange(item.selection);
  };

  return (
    <div>
      <input
        value={`${format(range.startDate, "dd/MM/yyyy")} - ${format(
          range.endDate,
          "dd/MM/yyyy"
        )}`}
        readOnly
        onClick={() => setIsOpen(true)}
        // onBlur={() => setIsOpen(false)}
      />
      <div>
        {isOpen && (
          <DateRange
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            showSelectionPreview={true}
            className="date"
            Date={new Date()}
            onChange={handleSelect}
            ranges={[range]}
            months={2}
            direction="horizontal"
          />
        )}
      </div>
    </div>
  );
};

export default DateRangeComponent;
