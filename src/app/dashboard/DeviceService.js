export class DeviceService {
    // This mock test function
    // TODO Need rewrite after sensors BE implementation
    getSensorData() {
        return [
            {
                date: 1460562388489,
                value: 5
            },
            {
                date: 1460562398236,
                value: 2
            },
            {
                date: 1460562405683,
                value: 4
            }
        ];
    }
}
