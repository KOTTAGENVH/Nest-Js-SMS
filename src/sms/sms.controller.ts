import { Controller, Post, Body } from '@nestjs/common';
import { SmsService } from './sms.service';
import { CreateSmDto } from './dto/create-sm.dto';

@Controller('smsservice')
export class SmsController {
  constructor(private readonly smsService: SmsService) {}

  @Post('sms')
  async sendSms(@Body() createSmDto: CreateSmDto) {
    return this.smsService.sendSms(createSmDto);
  }
}
