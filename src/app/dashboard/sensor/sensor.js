import {Component} from 'angular2/core';
import tmpl from './sensor.html';
import stls from './sensor.css';

@Component({
    selector: 'sm-sensor-widget',
    template: tmpl,
    styles: [stls],
    inputs: ['data']
})
export class Sensor {}
