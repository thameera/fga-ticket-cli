import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { handler as handleTickets } from "./lib/tickets/index.js";

const main = async () => {
  await yargs(hideBin(process.argv))
    .command(
      "tickets <action> [options]",
      "Execute a command",
      (yargs) => {
        yargs
          .positional("action", {
            type: "string",
            describe: "Action",
          })
          .option("u", {
            alias: "username",
            describe: "Username",
            type: "string",
            demandOption: true,
          });
      },
      async (argv) => {
        await handleTickets(argv);
      },
    )
    .help()
    .parse();

  console.log("Exiting");
};

main();
