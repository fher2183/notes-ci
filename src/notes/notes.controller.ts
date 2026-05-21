import { Body, Controller, Get, Param, Post, Query, NotFoundException } from '@nestjs/common';
import { NotesService } from './notes.service';
import { CreateNoteDto } from './dto/create-note.dto';
import { QueryNoteDto } from './dto/query-note.dto';

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Post('create')
  create(@Body() dto: CreateNoteDto) {
    return this.notesService.create(dto);
  }

  @Post('bulk-create')
  bulkCreate(@Body() dtos: CreateNoteDto[]) {
    return this.notesService.bulkCreate(dtos);
  }

  @Get()
  findAll(@Query() query: QueryNoteDto) {
    return this.notesService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const note = this.notesService.findOne(id);
    if (!note) {
      throw new NotFoundException(`Nota con ID ${id} no encontrada`);
    }
    return note;
  }
}
