import {RequestMethod} from '../shared/http/request-method.enum';
import {RequestConfig} from '../shared/request.config';

export function fetchCars(): RequestConfig {
    return {
        url: 'cars/dashboard',
        httpMethod: RequestMethod.GET,
    }
}

export function fetchTopCars(): RequestConfig {
    return {
        url: 'cars/top-external',
        httpMethod: RequestMethod.GET,
    }
}

export function fetchBestCars(): RequestConfig {
    return {
        url: 'cars/best-external',
        httpMethod: RequestMethod.GET,
    }
}
