import {Injectable, Component} from 'angular2/core';
import {NgForm} from 'angular2/common';// eslint-disable-line
import {RouteParams} from 'angular2/router';
import {Http, HTTP_PROVIDERS} from 'angular2/http';

import Sensor from './sensor';
import SensorDetailService from './sensor-detail.service';
import template from './sensor-detail.html';

const selector = 'sh-sensor-detail';

@Component({
    selector,
    template,
    providers: [
        Http,
        HTTP_PROVIDERS,
        SensorDetailService
    ]
})
@Injectable()
export class SensorDetail {
    constructor(sensorDetailService: SensorDetailService, params: RouteParams) {
        this.sensorDetailService = sensorDetailService;
        this.sensor = new Sensor();
        this.id = params.get('id');
    }

    ngOnInit() {
        if (this.id.toString() !== 'test') {
            this.getSensorDetail(this.id);
        }
    }

    getSensorDetail(id) {// eslint-disable-line
        console.log('getSensorDetail');// eslint-disable-line
    }

    save() {
        console.log(this.sensor);// eslint-disable-line
        this.sensorDetailService.save(this.sensor);
    }
}
