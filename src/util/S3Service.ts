import { Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';
import { ConfigService } from '@nestjs/config';


@Injectable()
export class S3Service {
    private s3: AWS.S3;

    constructor(private readonly configService: ConfigService) {
        // AWS設定
        AWS.config.update({
            accessKeyId: configService.get<string>('AWS_ACCESS_KEY_ID'),
            secretAccessKey: configService.get<string>('AWS_SECRET_ACCESS_KEY'),
            region: configService.get<string>('AWS_REGION'),
        });

        // S3インスタンスの作成
        this.s3 = new AWS.S3();
    }

  // ファイルのアップロード
  async uploadFile(fileStream: any, filename: any): Promise<string> {
    const bucketName = this.configService.get<string>('AWS_S3_BUCKET_NAME');
    const env = this.configService.get<string>('NODE_ENV');
    const key = `${env}/${Date.now()}-${filename}`;

    const params = {
      Bucket: bucketName,
      Key: key,
      Body: fileStream,
    };

    try {
      await this.s3.upload(params).promise();
      return key;
    } catch (error) {
      throw new Error(`S3 upload error: ${error.message}`);
    }
  }
}
