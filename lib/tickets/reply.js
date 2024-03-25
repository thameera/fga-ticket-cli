import { input } from "@inquirer/prompts";
import db from "../db.js";
import chalk from "chalk";

export const replyTicket = async (args) => {
  const ticketNumber = await input({
    message: "Ticket number:",
    type: "number",
    filter: (value) => Number(value),
  });
  const msg = await input({
    message: "Enter the reply:",
  });

  try {
    await db.pushToArray("tickets", ticketNumber, "posts", {
      msg,
      user: args.username,
    });
    console.log(`Reply sent in ticket ${chalk.gray(ticketNumber)}`);
  } catch (error) {
    console.error(error.message);
  }
};
