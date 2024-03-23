import { createTicket } from "./create.js";
import { viewTickets } from "./view.js";

export const handler = async (args) => {
  if (args.action === "create") {
    await createTicket(args);
  } else if (args.action === "view") {
    await viewTickets(args);
  } else {
    console.log("Unknown action");
    process.exit(1);
  }
};
