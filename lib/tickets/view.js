import db from "../db.js";

export const viewTickets = async (args) => {
  const tickets = await db.getAllByUser("tickets", args.username);
  console.log(`Tickets of ${args.username}:`);
  tickets.forEach((ticket) => {
    console.log(`#${ticket.number} - ${ticket.title}`);
  });
};
