import {Http, HTTP_PROVIDERS, Response} from 'angular2/http';
import SensorDetailService from './sensor-detail.service';

describe('SensorDetailService', () => {
    let sut;
    let http;
    let sensor;

    beforeEach(() => {
        sensor = {};
        http = Http;
        spyOn(http, 'post');
        sut = new SensorDetailService(http);
    });

    it('should save new sensor', () => {
        sut.save(sensor);
        expect(http.post).toHaveBeenCalledWith('api/sensor/save', sensor);
    });
});
