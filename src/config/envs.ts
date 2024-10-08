import 'dotenv/config';
import * as joi from 'joi';

interface EnvVars {
  PORT: number;
  FRONTEND_URL: string;
  AWS_BUCKET_NAME: string;
  AWS_REGION: string;
  AWS_ACCESS_KEY_ID: string;
  AWS_SECRET_ACCESS_KEY: string;
}

const envsScheme = joi
  .object({
    PORT: joi.number().required(),
    FRONTEND_URL: joi.string().required(),
    AWS_BUCKET_NAME: joi.string().required(),
    AWS_REGION: joi.string().required(),
    AWS_ACCESS_KEY_ID: joi.string().required(),
    AWS_SECRET_ACCESS_KEY: joi.string().required(),
  })
  .unknown();

const { error, value } = envsScheme.validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const env: EnvVars = value;

export const envs = {
  port: env.PORT,
  frontendUrl: env.FRONTEND_URL,
  awsBucketName: env.AWS_BUCKET_NAME,
  awsRegion: env.AWS_REGION,
  awsAccessKey: env.AWS_ACCESS_KEY_ID,
  awsSecretKey: env.AWS_SECRET_ACCESS_KEY,
};
