import { input } from "@inquirer/prompts";
import Table from "cli-table3";
import chalk from "chalk";

import db from "../db.js";

export const viewTicket = async (args) => {
  const ticketNumber = await input({
    message: "Ticket number:",
    type: "number",
    filter: (value) => Number(value),
  });

  const ticket = await db.getById("tickets", ticketNumber);

  if (!ticket) {
    console.log(`Ticket #${ticketNumber} not found.`);
    return;
  }

  console.log(`Ticket # : ${chalk.gray(ticket.id)}`);
  console.log(`Title    : ${ticket.title}`);
  console.log(`Assignee : ${chalk.yellow(ticket.user || "unassigned")}`);

  const table = new Table({
    head: ["#", "Message"],
  });

  ticket.posts.forEach((post, idx) => {
    table.push([chalk.gray(idx), post.msg]);
  });
  console.log(table.toString());
};
