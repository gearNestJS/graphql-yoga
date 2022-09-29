import { createServer } from '@graphql-yoga/node';

async function main() {
  const server = createServer({});
  await server.start();
}

main();
