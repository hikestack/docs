## !!steps

导入模块

```ts !
import path from "path";
import { Module } from "@nestjs/common";
// !focus
import { LoggerModule, WinstonAdapter } from "@hikestack/logger";
import { ConfigModule, ConfigService } from "@nestjs/config";

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			cache: true,
			envFilePath: [
				path.resolve(
					__dirname,
					"..",
					`env/${process.env.NODE_ENV || "development"}.env`,
				),
			],
			load: configs,
		}),
    // !focus(1:6)
		LoggerModule.registerAsync({
			inject: [ConfigService],
			useFactory: (configService: ConfigService) => ({
				adapter: new WinstonAdapter(configService.get("logger")),
			}),
		})
	]
})
export class AppModule {}
```

## !!steps

配置模块

```ts !
import { registerAs } from '@nestjs/config';
import kleur from 'kleur';
import winston, { format } from 'winston';

const colors = {
    info: kleur.green,
    warn: kleur.yellow,
    error: kleur.red,
};

export default registerAs<winston.LoggerOptions>('logger', () => ({
    level: 'info',
    format: format.combine(
        format.label({ label: 'Hike' }),
        format.splat(),
        format.ms(),
        format.timestamp({ format: 'YYYY/MM/DD HH:mm:ss' }),
        format.printf(({ label, timestamp, level, message, ms, ...splat }: any) => {
            const colorizeLevel = colors[level](level.toUpperCase());
            const colorizeMessage = colors[level](message);
            const context = (splat[Symbol.for('splat')] || []).map(item => String(item)).join(', ');
            return `${kleur.green(`[${label}] ${process.pid}  -`)} ${timestamp}     ${colorizeLevel} ${context ? `${kleur.cyan(`[${context}]`)} ` : ''}${colorizeMessage} ${ms ? kleur.yellow(ms) : ''}`;
        }),
    ),
    transports: [new winston.transports.Console()],
}));
```

## !!steps

使用模块

```ts !
// !focus
import { LoggerService } from '@hikestack/logger';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  // !focus
  constructor(private readonly loggerService: LoggerService) { }

  sayHello() {
    // !focus
    this.loggerService.log('Hello World!');
  }
}
```
