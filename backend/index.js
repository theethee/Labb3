/* ts-check */

const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;
const dotenv = require("dotenv");
const { Client } = require("pg");
const cors = require("cors");

dotenv.config();

const client = new Client({
  connectionString: process.env.PGURI,
});

client.connect();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((request, response, next) => {
  console.log(request.url);
  next();
});

const createaccount = require("./routes/createaccount");
createaccount.client = client;
app.use(createaccount);

const signin = require("./routes/signin");
signin.client = client;
app.use(signin);

const blog = require("./routes/blog");
blog.client = client;
app.use(blog);

const editblogpost = require("./routes/editblogpost");
editblogpost.client = client;
app.use(editblogpost);

const deleteblogpost = require("./routes/deleteblogpost");
deleteblogpost.client = client;
app.use(deleteblogpost);

const editaccount = require("./routes/editaccount");
editaccount.client = client;
app.use(editaccount);

const deleteaccount = require("./routes/deleteaccount");
deleteaccount.client = client;
app.use(deleteaccount);

// hämtar alla bloggar
// app.get("/api", async (_request, response) => {
//   const { rows } = await client.query("SELECT * FROM blogs");
//   response.send(rows);
// });

// hämtar alla användaare
// app.get("/users", async (_request, response) => {
//   const { rows } = await client.query("SELECT * FROM person_datas");
//   console.log("Hämta användare");
//   response.send(rows);
// });

app.use(express.static(path.join(path.resolve(), "dist")));

app.listen(port, () => {
  console.log(`Välkommen till port ${port}`);
});
