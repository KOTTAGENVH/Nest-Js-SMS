import { Injectable } from '@nestjs/common';
import { CreateSmDto } from './dto/create-sm.dto';
import { TwilioService } from 'nestjs-twilio';

@Injectable()
export class SmsService {
  constructor(private readonly twilioService: TwilioService) {}

  async sendSms(createSmDto: CreateSmDto): Promise<string> {
    try {
      const message = await this.twilioService.client.messages.create({
        body: createSmDto.body,
        from: 'Add Your TWILLO Number', // Your Twilio number
        to: createSmDto.to,
      });
      return (
        message.dateSent +
        message.accountSid +
        message.body +
        message.errorCode +
        message.errorMessage
      ); // Return
    } catch (error) {
      return error.message;
    }
  }
}
