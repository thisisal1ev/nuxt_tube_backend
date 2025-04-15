import { hashSync } from 'bcrypt';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const randomDecimalNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) * 10 + min * 10) / 10;
};

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
    data: [
      {
        banner:
          'https://yt3.googleusercontent.com/wvhj7g9Ue3EO2JDutWunw-GFKcy_fkrV4juRtmBa1Jx8Rkq79cJG30zfZ3CtPFfU1NH1mqLUvcQ=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj',
        avatar:
          'https://yt3.googleusercontent.com/aiw73zdQg8OFJXVUK0m4rFJnxSUn5GArkXrLWD3sDh8LJ0eAVpdn9ECmXSKyHyyoX98pbKYVWQ=s160-c-k-c0x00ffffff-no-rj',
        description: '',
        isOfficial: false,
        alias: 'whyyy',
        name: 'Chao',
      },
      {
        banner:
          'https://yt3.googleusercontent.com/wvhj7g9Ue3EO2JDutWunw-GFKcy_fkrV4juRtmBa1Jx8Rkq79cJG30zfZ3CtPFfU1NH1mqLUvcQ=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj',
        avatar:
          'https://yt3.googleusercontent.com/aiw73zdQg8OFJXVUK0m4rFJnxSUn5GArkXrLWD3sDh8LJ0eAVpdn9ECmXSKyHyyoX98pbKYVWQ=s160-c-k-c0x00ffffff-no-rj',
        description: '',
        isOfficial: true,
        alias: 'knowww',
        name: 'Hello kitty',
      },
    ],
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
