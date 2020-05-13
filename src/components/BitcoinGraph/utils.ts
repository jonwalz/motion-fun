import moment from "moment";

export const timeFormatter = tick => moment(tick).format("HH:mm:ss");
