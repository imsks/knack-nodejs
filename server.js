const app = require("./app");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" })

const PORT = process.env.PORT || 8000;

app.listen(PORT, () =>
  console.log(`Server has started on port localhost:${PORT}`)
);