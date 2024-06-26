import Table from "cli-table3";
import chalk from "chalk";

import db from "../db.js";

export const listTickets = async (args) => {
  const showAll = args.all;

  const tickets = showAll
    ? await db.getAll("tickets")
    : await db.getAllByUser("tickets", args.username);

  if (showAll) {
    console.log(`All tickets:`);
  } else {
    console.log(`Tickets of ${chalk.yellow(args.username)}:`);
  }

  const table = new Table({
    head: ["#", "Title", "Assignee"],
  });
  tickets.forEach((ticket) => {
    table.push([
      chalk.gray(ticket.id),
      ticket.title,
      chalk.yellow(ticket.user || "unassigned"),
    ]);
  });
  console.log(table.toString());
};
