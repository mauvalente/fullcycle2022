import { Module } from '@nestjs/common';
import { MailListService } from './mail-list.service';
import { MailListController } from './mail-list.controller';

@Module({
  controllers: [MailListController],
  providers: [MailListService]
})
export class MailListModule {}
