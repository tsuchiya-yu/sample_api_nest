import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UserInterceptor implements NestInterceptor {
  constructor(private configService: ConfigService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map(data => {
        if (Array.isArray(data)) {
          return data.map(user => this.transformUserResponse(user));
        } else {
          return this.transformUserResponse(data);
        }
      })
    );
  }

  private transformUserResponse(user) {
    const bucketUrl = this.configService.get<string>('AWS_S3_BUCKET_NAME');

    if (user.userImageFile) {
      user.userImageFile = `https://s3.amazonaws.com/${bucketUrl}/${user.userImageFile}`;
    }

    return user;
  }
}
