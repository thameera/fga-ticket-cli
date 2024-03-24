import { input } from "@inquirer/prompts";
import db from "../db.js";
import chalk from "chalk";

export const reassignTicket = async (args) => {
  const ticketNumber = await input({
    message: "Ticket number:",
    type: "number",
    filter: (value) => Number(value),
  });
  const assignee = await input({
    message: "New assignee name:",
  });

  try {
    await db.updateById("tickets", ticketNumber, {
      user: assignee,
    });
    console.log(
      `Ticket ${chalk.gray(ticketNumber)} reassigned to ${chalk.yellow(assignee)}.`,
    );
  } catch (error) {
    console.error(error.message);
  }
};
