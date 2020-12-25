import { differenceInYears, differenceInCalendarDays } from "date-fns";

const START_DATE = new Date(2015, 10, 29);

export default function calculateMyWorkExperience() {
  return [
    differenceInYears(new Date(), START_DATE),
    differenceInCalendarDays(new Date(), START_DATE),
  ];
}
