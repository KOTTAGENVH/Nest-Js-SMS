import { Module } from '@nestjs/common';
import { TwilioModule } from 'nestjs-twilio';
import { SmsService } from './sms.service';
import { SmsController } from './sms.controller';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [
    TwilioModule.forRoot({
      accountSid: process.env.TWILIO_ACCOUNT_SID,
      authToken: process.env.TWILIO_AUTH_TOKEN,
    }),
  ],
  controllers: [SmsController],
  providers: [SmsService],
})
export class SmsModule {}
