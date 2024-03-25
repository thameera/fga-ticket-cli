import { createTicket } from "./create.js";
import { listTickets } from "./list.js";
import { reassignTicket } from "./reassign.js";
import { replyTicket } from "./reply.js";
import { viewTicket } from "./view.js";

export const handler = async (args) => {
  if (args.action === "create") {
    await createTicket(args);
  } else if (args.action === "list") {
    await listTickets(args);
  } else if (args.action === "view") {
    await viewTicket(args);
  } else if (args.action === "reassign") {
    await reassignTicket(args);
  } else if (args.action === "reply") {
    await replyTicket(args);
  } else {
    console.log("Unknown action");
    process.exit(1);
  }
};
