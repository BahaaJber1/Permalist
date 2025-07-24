import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { Pool } from "pg";

dotenv.config();

const db = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let items = [];

// check the map function + how to deal wih array of objects
async function fetchItems() {
  try {
    const result = await db.query("SELECT * FROM items");
    items = result.rows.map((item) => ({ id: item.id, title: item.title }));
    console.log(items);
  } catch (error) {
    console.error("Error fetching items:", error);
    throw new Error("Failed to fetch items");
  }
}

async function insertItem(itemTitle) {
  try {
    await db.query("INSERT INTO items (title) Values ($1)", [itemTitle]);
  } catch (error) {
    console.error("Error inserting items:", error);
    throw new Error("Failed to insert items");
  }
}

async function editItem(itemId, itemTitle) {
  try {
    await db.query("UPDATE items SET title = ($1) WHERE id = ($2)", [itemTitle, itemId]);
  } catch (error) {
    console.error("Error editing items:", error);
    throw new Error("Failed to edit items");
  }
}

async function deleteItem(deleteId) {
  try{
    await db.query("DELETE FROM items WHERE id = ($1)", [deleteId]);
  } catch (error) {
    console.error("Error deleting items:", error);
    throw new Error("Failed to delete items");
  }
}

app.get("/", async (req, res) => {
  try {
    await fetchItems();
    res.render("index.ejs", {
      listTitle: "Today",
      listItems: items,
    });
  } catch (error) {
    console.error("Error rendering page:", error);
    res.status(500).send("Eror retrieving data");
  }
});

app.post("/add", async (req, res) => {
  const newItem = req.body.newItem;

  if (!newItem || newItem.trim() === "") {
    return res.status(400).send("Item title cannot be empty");
  }

  try {
    await insertItem(newItem);
    res.redirect("/");
  } catch (error) {
    console.error("Error adding item:", error);
    res.status(505).send("Error adding item");
  }
});

app.post("/edit", async (req, res) => {
  const updatedID = req.body.updatedItemId;
  const updatedTitle = req.body.updatedItemTitle;

  if (!updatedTitle || updatedTitle.trim() === "") {
    return res.status(400).send("Item title cannot be empty");
  }
  
  await editItem(updatedID, updatedTitle);
  res.redirect("/");
});

app.post("/delete", async (req, res) => {
  const deleteId = req.body.deleteItemId;
  await deleteItem(deleteId);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
