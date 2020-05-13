import moment from "moment";

export const timeFormatter = tick => moment(tick).format("dddd, MMMM Do YYYY");
