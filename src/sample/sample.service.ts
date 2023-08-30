import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateSampleInput } from './dto/create-sample.input';
import { UpdateSampleInput } from './dto/update-sample.input';

@Injectable()
export class SampleService {
  constructor(private prisma: PrismaService) { }

  create(createSampleInput: CreateSampleInput) {
    return 'This action adds a new sample';
  }

  findAll() {
    return this.prisma.sample.findMany({
      orderBy: {
        id: 'asc',
      },
    })
  }

  findOne(id: number) {
    return this.prisma.sample.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, updateSampleInput: UpdateSampleInput) {
    return `This action updates a #${id} sample`;
  }

  remove(id: number) {
    return `This action removes a #${id} sample`;
  }
}
