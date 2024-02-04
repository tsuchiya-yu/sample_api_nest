import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as admin from 'firebase-admin';
import { ServiceAccount } from 'firebase-admin';
import { ConfigService } from '@nestjs/config';
import { initializeApp } from 'firebase/app';
import { FirebaseApp } from '@firebase/app';
import { graphqlUploadExpress} from "graphql-upload-minimal";

export let firebaseApp: FirebaseApp = undefined;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useLogger(['error', 'warn', 'log', 'debug', 'verbose']);

  // for CORS
  app.enableCors();

  // for graphqlUploadExpress
  app.use(graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }));

  await app.listen(3000);
}
bootstrap();
