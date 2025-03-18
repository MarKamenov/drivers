
export type ActivityType = "drive" | "rest" | "work" | "available";

export interface Activity {
  startTime: string;
  type: ActivityType;
  duration: number;
}

export interface Trace {
  date: string;
  activity: Activity[];
}

export interface Driver {
  driverID: number;
  surname: string;
  forename: string;
  vehicleRegistration: string;
  traces: Trace[];
}
