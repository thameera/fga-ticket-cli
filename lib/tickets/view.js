import Table from "cli-table3";
import chalk from "chalk";

import db from "../db.js";

export const viewTickets = async (args) => {
  const tickets = await db.getAllByUser("tickets", args.username);

  console.log(`Tickets of ${chalk.yellow(args.username)}:`);

  const table = new Table({
    head: ["#", "Title"],
  });
  tickets.forEach((ticket) => {
    table.push([chalk.gray(ticket.number), ticket.title]);
  });
  console.log(table.toString());
};
