import {Component} from 'angular2/core';
import {Sensor} from './sensor';
import {DeviceService} from './DeviceService';

@Component({
    selector: 'sm-dashboard',
    directives: [Sensor],
    template: require('./dashboard.html')
})
export class Dashboard {
    ngOnInit() {
        this.sensorData = new DeviceService().getSensorData();
    }
}
