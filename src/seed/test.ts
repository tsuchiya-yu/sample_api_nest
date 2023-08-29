// シード(サンプル)データ投入コマンド：npx ts-node src/seed/test.ts

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const tests = ['タイトル１', 'タイトル２', 'タイトル３'];

  await Promise.all(
    tests.map(test => {
      return prisma.test.create({
        data: {
          title: test,
        },
      });
    }),
  );
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async e => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
