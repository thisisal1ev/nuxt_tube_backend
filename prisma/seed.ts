import { PrismaClient } from '@prisma/client';
import { hashSync } from 'bcrypt';

import { channels, videos } from './constants';

const prisma = new PrismaClient();

// TODO: доделать seed для 10 каналов, 30 видео, 30 обложек, и другие данные для видео (likes, comments and views)
async function up() {
  await prisma.user.createMany({
    data: [
      {
        email: 'wiseSteve@mail.uz',
        password: hashSync('11111111', 10),
        verified: false,
        role: 'USER',
      },
      {
        email: 'artificialSam@mail.uz',
        password: hashSync('11111111', 10),
        verified: true,
        role: 'ADMIN',
      },
    ],
  });

  await prisma.channel.createMany({
    data: channels,
  });

  await prisma.video.createMany({
    data: videos,
  });
}

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Channel" RESTART IDENTITY CASCADE`;
}

async function main() {
  try {
    await down();
    await up();
  } catch (e) {
    console.error(e);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
