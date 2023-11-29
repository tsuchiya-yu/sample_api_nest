import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as admin from 'firebase-admin';
import { ServiceAccount } from 'firebase-admin';
import { ConfigService } from '@nestjs/config';
import { initializeApp } from 'firebase/app';
import { FirebaseApp } from '@firebase/app';

export let firebaseApp: FirebaseApp = undefined;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService: ConfigService = app.get(ConfigService);
  const adminConfig: ServiceAccount = {
    projectId: configService.get<string>('FIREBASE_PROJECT_ID'),
    privateKey: configService
      .get<string>('FIREBASE_PRIVATE_KEY')
      .replace(/\\n/g, '\n'),
    clientEmail: configService.get<string>('FIREBASE_CLIENT_EMAIL'),
  };
  const firebaseConfig = {
    apiKey: configService.get<string>('API_KEY'),
    authDomain: configService.get<string>('AUTH_DOMAIN'),
    projectId: configService.get<string>('PROJECT_ID'),
    storageBucket: configService.get<string>('STORAGE_BUCKET'),
    messagingSenderId: configService.get<string>('MESSAGING_SENDER_ID'),
    appId: configService.get<string>('APP_ID'),
  };

  firebaseApp = initializeApp(firebaseConfig);
  admin.initializeApp({
    credential: admin.credential.cert(adminConfig),
  });

  app.useLogger(['error', 'warn', 'log', 'debug', 'verbose']);

  // for CORS
  app.enableCors();

  await app.listen(3000);
}
bootstrap();
