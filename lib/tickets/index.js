import { viewTickets } from "./view.js";

export const handler = async (args) => {
  console.log('Handling tickets with following args:')
  console.log(args);

  if (args.action === 'view') {
    await viewTickets(args);
  } else {
    console.log('Unknown action')
    process.exit(1);
  }
};
