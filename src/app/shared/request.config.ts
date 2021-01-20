import {RequestMethod} from './http/request-method.enum';

export interface RequestConfig {
    url: string;
    httpMethod: RequestMethod;
}
