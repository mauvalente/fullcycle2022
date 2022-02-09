import { Injectable } from '@nestjs/common';
import { CreateMailListDto } from './dto/create-mail-list.dto';
import { UpdateMailListDto } from './dto/update-mail-list.dto';

@Injectable()
export class MailListService {
  create(createMailListDto: CreateMailListDto) {
    return 'This action adds a new mailList';
  }

  findAll() {
    return `This action returns all mailList`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mailList`;
  }

  update(id: number, updateMailListDto: UpdateMailListDto) {
    return `This action updates a #${id} mailList`;
  }

  remove(id: number) {
    return `This action removes a #${id} mailList`;
  }
}
