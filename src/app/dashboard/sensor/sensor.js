import {Component} from 'angular2/core';

@Component({
    selector: 'sm-sensor-widget',
    template: require('./sensor.html'),
    inputs: ['data']
})
export class Sensor {
    ngOnInit() {
        console.log('Init sensor'); // eslint-disable-line
    }
}
