const { PrismaClient } = require('@prisma/client');
const p = new PrismaClient();
p.$queryRawUnsafe("SELECT table_schema, table_name FROM information_schema.tables WHERE table_schema NOT IN ('pg_catalog','information_schema')")
  .then((rows) => {
    console.log(JSON.stringify(rows, null, 2));
    return p.$disconnect();
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
