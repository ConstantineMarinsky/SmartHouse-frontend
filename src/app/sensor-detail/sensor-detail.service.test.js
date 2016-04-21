import {Http, HTTP_PROVIDERS, XHRBackend} from 'angular2/http';
import {MockBackend} from 'angular2/http/testing';
import {provide} from 'angular2/core';

import SensorDetailService from './sensor-detail.service';

fdescribe('SensorDetailService', () => {
    let mockId;
    let sensor;

    beforeEachProviders(() => {
        return [
            HTTP_PROVIDERS,
            provide(XHRBackend, {useClass: MockBackend}),
            SensorDetailService
        ];
    });
    beforeEach(() => {
        mockId = 713;
    });
    it('should return sensor by given id', () => {
        inject([XHRBackend, SensorDetailService], (mockBackend, sut) => {

            mockBackend.connections.subscribe(
                (connection:MockConnection) => {
                    connection.mockRespond(new Response(
                        new ResponseOptions({
                                body: {
                                    id: mockId,
                                    name: 'mock',
                                    type: 'mock',
                                    description: 'mock',
                                    active: true
                                }
                            }
                        )));
                });

            sut.get(mockId).subscribe(sensors => {
                expect(sensors.id).toBe(mockId);
            });
        });
    });
});
