import { input } from "@inquirer/prompts";
import chalk from "chalk";

import db from "../db.js";

export const deleteTicket = async (args) => {
  const ticketNumber = await input({
    message: "Ticket number:",
    type: "number",
    filter: (value) => Number(value),
  });

  try {
    await db.deleteById("tickets", ticketNumber);
    console.log(`Ticket #${chalk.gray(ticketNumber)} deleted.`);
  } catch (e) {
    console.error(e.message);
    return;
  }
};
