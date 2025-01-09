
import { Guid } from "guid-typescript";

export type worker = {
    id: Guid,
    firstName: string,
    secondName: string,
    jobTitle: string,
    registrationDate?: Date,
    isRetired: boolean
};
  
export type store =
{
    id: number,
    name: string,
    address: string,
    staff: string[],
    regionId: number
}

export type scheduleItem = 
{
    date: Date,
    storeId: number,
    workerId: Guid,
    startTime: number,
    endTime: number,
}