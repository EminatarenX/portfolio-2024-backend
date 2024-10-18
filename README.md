<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Schema de la base de datos 
```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mongodb"
  url      = env("DATABASE_URL")
}

model Profile {
  id        String   @id @default(auto()) @map("_id") @db.ObjectId
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
  id        String   @id @default(auto()) @map("_id") @db.ObjectId
  content   String
  createdAt DateTime @default(now())
}

model Activity {
  id        String   @id @default(auto()) @map("_id") @db.ObjectId
  name      String
  content   String
  icon      String
  active    Boolean  @default(true)
  createdAt DateTime @default(now())
}

model SoftSkill {
  id        String   @id @default(auto()) @map("_id") @db.ObjectId
  name      String
  content   String
  icon      String
  active    Boolean  @default(true)
  createdAt DateTime @default(now())
}

model Education {
  id        String   @id @default(auto()) @map("_id") @db.ObjectId
  name      String
  start     Int
  end       Int?
  content   String
  active    Boolean  @default(true)
  createdAt DateTime @default(now())
}

model Experience {
  id        String   @id @default(auto()) @map("_id") @db.ObjectId
  name      String
  start     Int
  end       Int?
  content   String
  active    Boolean  @default(true)
  createdAt DateTime @default(now())
}

model Language {
  id        String   @id @default(auto()) @map("_id") @db.ObjectId
  name      String
  level     Int
  active    Boolean  @default(true)
  createdAt DateTime @default(now())
}

model Skill {
  id        String   @id @default(auto()) @map("_id") @db.ObjectId
  name      String
  level     Int
  active    Boolean  @default(true)
  createdAt DateTime @default(now())
}

model Project {
  id        String   @id @default(auto()) @map("_id") @db.ObjectId
  name      String
  category  String
  link      String
  image     String?
  createdAt DateTime @default(now())
}

model Blog {
  id        String   @id @default(auto()) @map("_id") @db.ObjectId
  title     String
  category  String?
  image     String?
  link      String?
  content   String
  active    Boolean  @default(true)
  createdAt DateTime @default(now())
}

model Message {
  id        String   @id @default(auto()) @map("_id") @db.ObjectId
  name      String
  email     String
  content   String
  createdAt DateTime @default(now())
}
```

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
