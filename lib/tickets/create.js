import { input } from "@inquirer/prompts";
import db from "../db.js";

export const createTicket = async (args) => {
  console.log("Going to create a ticket");

  const ticketNumber = await input({
    message: "Ticket number:",
    type: "number",
    filter: (value) => Number(value),
  });
  const title = await input({
    message: "Title:",
  });
  const description = await input({
    message: "Description:",
  });

  await db.add("tickets", {
    number: ticketNumber,
    title,
    description,
    user: args.username,
  });

  console.log(`Ticket #${ticketNumber} created.`);
};
