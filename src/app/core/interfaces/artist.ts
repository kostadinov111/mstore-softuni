import { IBase } from "./base";

export interface IArtist extends IBase {
    name: string;
    formed: string;
    imgUrl: string;
    desc: string;
}