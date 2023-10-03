import { BaseModel } from "~/server/model/BaseModel";

export class RadarModel extends BaseModel {
    static tableName = 'radars';

    name!: string;
    description?: string;
}
