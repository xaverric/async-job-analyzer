import axios from "axios";
import { FILE_LOG } from "../../log/winston.config";
import AxiosDtoInType from "./types/AxiosDtoInType";
import CallCommandDtoInType from "./types/CallCommandDtoInType";

const callCommand = async ({url, method, data, token}: CallCommandDtoInType) => {
    const dtoIn = _prepareAxiosConfig({url, method, data, token});
    token && FILE_LOG.debug(`Calling command ${method}: ${url} with dtoIn: ${stringifyDtoIn(dtoIn)}`);
    const response = await axios(dtoIn);
    return response.data;
};

const _prepareAxiosConfig = ({url, method, data, token}: CallCommandDtoInType): AxiosDtoInType => {
    const dtoIn: AxiosDtoInType = {
        url: url,
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        method: token ? method : 'POST',
        data: JSON.stringify(data)
    };
    if (token) {
        dtoIn.headers.Authorization = `Bearer ${token}`;
    }
    return dtoIn;
};

/**
 * Transforms dtoIn into the string value and removes any confidential information from it.
 *
 * @param dtoIn
 */
 const stringifyDtoIn = (dtoIn: AxiosDtoInType) => JSON.stringify({ ...dtoIn, headers: { ...dtoIn.headers, Authorization: '***' }, agent: null }, null, 4);


export default callCommand;
