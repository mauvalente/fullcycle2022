import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MailListService } from './mail-list.service';
import { CreateMailListDto } from './dto/create-mail-list.dto';
import { UpdateMailListDto } from './dto/update-mail-list.dto';

@Controller('mail-list')
export class MailListController {
  constructor(private readonly mailListService: MailListService) {}

  @Post()
  create(@Body() createMailListDto: CreateMailListDto) {
    return this.mailListService.create(createMailListDto);
  }

  @Get()
  findAll() {
    return this.mailListService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mailListService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMailListDto: UpdateMailListDto) {
    return this.mailListService.update(+id, updateMailListDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mailListService.remove(+id);
  }
}
