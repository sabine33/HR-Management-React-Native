import React, { useState } from "react";
import DatePicker from "react-native-datepicker";
export function MyDatePicker({}) {
  const [date, setDate] = useState(new Date());

  return (
    <DatePicker
      showIcon={true}
      hideText={true}
      ref={(ref) => {
        // this.setState({ datePicker: ref });
      }}
      date={date}
      mode="date"
      placeholder="select date"
      format="YYYY-MM-DD"
      minDate="2016-05-01"
      maxDate="2016-06-01"
      confirmBtnText="Confirm"
      cancelBtnText="Cancel"
      customStyles={{
        dateIcon: {
          marginLeft: 100,
        },
        dateInput: {},
        // ... You can check the source to find the other keys.
      }}
      onDateChange={(date) => {
        setDate(date);
      }}
    />
  );
}
