import { differenceInCalendarDays } from "date-fns";

const START_DATE = new Date(2015, 10, 29);

export default function calculateMyWorkExperience() {
  const days = differenceInCalendarDays(new Date(), START_DATE);
  const years = (days / 365).toFixed(2);
  return [years, days];
}
