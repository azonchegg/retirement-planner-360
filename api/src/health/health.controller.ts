import { Controller, Get } from '@nestjs/common'
import { HealthCheck, HealthCheckService, HttpHealthIndicator } from "@nestjs/terminus"

@Controller('health')
export class HealthController {
    constructor(
        private health: HealthCheckService,
        private http: HttpHealthIndicator
    ) {}

    @Get()
    @HealthCheck()
    checkGet() {
        return this.health.check([
            () => this.http.pingCheck('get api', 'http://localhost:3000/cat/50')
        ])
    }
}
