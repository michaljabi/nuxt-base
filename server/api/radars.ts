import {RadarModel} from "~/server/model/radar.model";

export default eventHandler(async () => {
    const allRadars = await RadarModel.query();
    return { allRadars }
}   )
