import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';

@Injectable()
export default class SensorDetailService {
    constructor(http: Http) {
        this.http = http;
    }
    save(sensor) {
        this.http.post('api/sensor/save', sensor);
    }
}
