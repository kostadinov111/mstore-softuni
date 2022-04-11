import { IBase } from "./base";

export interface IEvent extends IBase {
    location: string;
    date: string;
}