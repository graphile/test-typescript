import { createServer } from "http";
import postgraphile from "postgraphile";

createServer(postgraphile(process.env.DATABASE_URL, (process.env.SCHEMAS || "").split(",")))
  .listen(parseInt((process.env.PORT || ""), 10) || 5000);
