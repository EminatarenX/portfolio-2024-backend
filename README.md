<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Prisma Schema
```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model Profile {
  id        String   @id @default(uuid())
  name      String
  specialty String
  phone     String
  email     String
  birthDay  String
  location  String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt()
}

model Resume {
  id        String   @id @default(uuid())
  content   String
  createdAt DateTime @default(now())
}

model Activity {
  id        String   @id @default(uuid())
  name      String
  content   String
  icon      String
  active    Boolean  @default(true)
  createdAt DateTime @default(now())
}

model SoftSkill {
  id        String   @id @default(uuid())
  name      String
  content   String
  icon      String
  active    Boolean  @default(true)
  createdAt DateTime @default(now())
}

model Education {
  id        String   @id @default(uuid())
  name      String
  start     Int
  end       Int?
  content   String
  active    Boolean  @default(true)
  createdAt DateTime @default(now())
}

model Experience {
  id        String   @id @default(uuid())
  name      String
  start     Int
  end       Int?
  content   String
  active    Boolean  @default(true)
  createdAt DateTime @default(now())
}

model Language {
  id        String   @id @default(uuid())
  name      String
  level     Int
  active    Boolean  @default(true)
  createdAt DateTime @default(now())
}

model Skill {
  id        String   @id @default(uuid())
  name      String
  level     Int
  active    Boolean  @default(true)
  createdAt DateTime @default(now())
}

model Project {
  id        String   @id @default(uuid())
  name      String
  category  String
  link      String
  image     String?
  createdAt DateTime @default(now())
}

model Blog {
  id        String   @id @default(uuid())
  title     String
  category  String?
  image     String?
  link      String?
  content   String
  active    Boolean  @default(true)
  createdAt DateTime @default(now())
}

model Message {
  id        String   @id @default(uuid())
  name      String
  email     String
  content   String
  createdAt DateTime @default(now())
}

```