import { Injectable } from '@nestjs/common';
import { CreateSampleInput } from './dto/create-sample.input';
import { UpdateSampleInput } from './dto/update-sample.input';
import { Sample } from './entities/sample.entity';

@Injectable()
export class SampleService {
  create(createSampleInput: CreateSampleInput) {
    return 'This action adds a new sample';
  }

  findAll() {
    // Sample!!
    const sample1 = new Sample();
    sample1.id = 1;

    const sample2 = new Sample();
    sample2.id = 2;

    return [sample1, sample2];
  }

  findOne(id: number) {
    // Sample!!
    const sample = new Sample();
    sample.id = 10;

    return sample;
  }

  update(id: number, updateSampleInput: UpdateSampleInput) {
    return `This action updates a #${id} sample`;
  }

  remove(id: number) {
    return `This action removes a #${id} sample`;
  }
}
