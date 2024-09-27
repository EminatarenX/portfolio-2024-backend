import {
  DeleteObjectCommand,
  GetObjectCommand,
  PutObjectCommand,
  S3Client,
} from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { Injectable } from '@nestjs/common';
import { envs } from 'src/config';

Injectable();
export class UploaderService {
  private client: S3Client;
  private bucketName: string;
  constructor() {
    this.bucketName = envs.awsBucketName;
    this.client = new S3Client({
      region: envs.awsRegion,
      credentials: {
        accessKeyId: envs.awsAccessKey,
        secretAccessKey: envs.awsSecretKey,
      },
    });
  }

  async upload(image: Express.Multer.File, key: string) {
    const command = new PutObjectCommand({
      Bucket: this.bucketName,
      Key: key + '.jpg',
      Body: image.buffer,
    });

    await this.client.send(command);
  }

  async getSignedUrl(key: string): Promise<string> {
    const command = new GetObjectCommand({
      Bucket: this.bucketName,
      Key: key + '.jpg',
    });

    return await getSignedUrl(this.client, command, { expiresIn: 3600 });
  }

  async delete(key: string) {
    const command = new DeleteObjectCommand({
      Bucket: this.bucketName,
      Key: key + '.jpg',
    });

    await this.client.send(command);
  }
}
