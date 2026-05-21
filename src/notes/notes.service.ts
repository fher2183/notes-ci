import { Injectable } from '@nestjs/common';
import { Note } from './entities/note.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class NotesService {
  private notes: Note[] = [];

  create(note: Partial<Note>): Note {
    const n: Note = {
      id: uuidv4(),
      studentId: note.studentId || '',
      subject: note.subject || '',
      score: note.score || 0,
      createdAt: new Date().toISOString(),
    };
    this.notes.push(n);
    return n;
  }

  bulkCreate(notes: Partial<Note>[]): Note[] {
    return notes.map(n => this.create(n));
  }

  findAll(filters?: { studentId?: string; subject?: string }): Note[] {
    let res = this.notes;
    if (filters?.studentId) {
      res = res.filter(r => r.studentId === filters.studentId);
    }
    if (filters?.subject) {
      res = res.filter(r => r.subject === filters.subject);
    }
    return res;
  }

  findOne(id: string): Note | undefined {
    return this.notes.find(n => n.id === id);
  }
}
