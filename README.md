# Permalist Project

<img width="1912" height="897" alt="image" src="https://github.com/user-attachments/assets/a61aed81-5270-4c04-8a50-bbffacc56275" />


<img width="1917" height="905" alt="image" src="https://github.com/user-attachments/assets/9a7254da-82a0-4974-8753-f9286f707191" />

<img width="1909" height="902" alt="image" src="https://github.com/user-attachments/assets/6707534a-55e6-4fa4-a44c-c8e8205c441e" />

<img width="1915" height="900" alt="image" src="https://github.com/user-attachments/assets/f4f740a1-b91a-4892-9ac0-a8be07c4c25f" />


A robust to-do list web application built with Node.js, Express, and PostgreSQL. Users can add, edit, and delete tasks with full data persistence through a PostgreSQL database and secure environment configuration.

---

## Features

- **Add Tasks:** Create new to-do items with custom titles.
- **Edit Tasks:** Update existing task titles inline.
- **Delete Tasks:** Remove completed or unwanted tasks.
- **Data Persistence:** All tasks are stored in a PostgreSQL database.
- **Environment Variables:** Secure database configuration using dotenv.
- **Error Handling:** Comprehensive error handling for all database operations.
- **Input Validation:** Prevents empty or invalid task entries.
- **Responsive Design:** Clean and user-friendly interface.

---

## Technologies Used

- Node.js
- Express.js
- PostgreSQL (with connection pooling)
- EJS (Embedded JavaScript templates)
- body-parser
- dotenv (for environment variables)

---

## Database Setup

1. **Create a PostgreSQL database named `permalist`**

2. **Create the items table:**
   ```sql
   CREATE TABLE items (
     id SERIAL PRIMARY KEY,
     title VARCHAR(255) NOT NULL
   );
   ```

3. **Optional: Insert sample data:**
   ```sql
   INSERT INTO items (title) VALUES 
   ('Buy groceries'),
   ('Walk the dog'),
   ('Complete project');
   ```

---

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/<your-github-username>/permalist-project.git
   cd permalist-project
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create a `.env` file in the root directory:**
   ```env
   DB_USER=your_postgres_user
   DB_HOST=localhost
   DB_NAME=permalist
   DB_PASSWORD=your_postgres_password
   DB_PORT=5432
   ```

4. **Start the server:**
   ```bash
   node index.js
   ```

5. **Open your browser and go to:**
   ```
   http://localhost:3000
   ```

---

## How to Use

1. **Add a Task:** Type your task in the input field and click the "+" button.
2. **Edit a Task:** Click on any existing task to edit it inline.
3. **Delete a Task:** Click the delete button next to any task to remove it.
4. **View Tasks:** All your tasks are displayed in a clean list format with "Today" as the default list title.

---

## API Endpoints

- **GET /** - Display all tasks on the main page
- **POST /add** - Add a new task to the list
- **POST /edit** - Edit an existing task by ID
- **POST /delete** - Delete a task by ID

---

## Folder Structure

```
permalist-project/
├── public/           # Static files (CSS, images, etc.)
├── views/            # EJS templates
│   └── index.ejs     # Main to-do list page
├── index.js          # Main server file
├── package.json
├── .env              # Environment variables (not tracked by git)
└── README.md
```

---

## Security Features

- **SQL Injection Prevention:** Uses parameterized queries for all database operations.
- **Environment Variables:** Database credentials stored securely in .env file.
- **Input Validation:** Validates task titles to prevent empty submissions.
- **Error Handling:** Comprehensive error handling with appropriate HTTP status codes.

---

## Error Handling

The application includes robust error handling for:
- Database connection issues
- Failed CRUD operations (Create, Read, Update, Delete)
- Empty or invalid user input
- Server errors with appropriate HTTP status codes (400, 500, 505)

---

## Database Functions

The application uses modular async functions for database operations:
- **fetchItems():** Retrieves all items from the database
- **insertItem(itemTitle):** Adds a new item to the database
- **editItem(itemId, itemTitle):** Updates an existing item
- **deleteItem(deleteId):** Removes an item from the database

---

## Security Notes

- Database credentials are stored in environment variables (.env file)
- The .env file should be added to .gitignore to prevent credential exposure
- All database queries use parameterized statements to prevent SQL injection
- Input validation prevents empty task submissions

---

## Future Enhancements

- User authentication and personal task lists
- Task categories and priorities
- Due dates and reminders
- Task completion status with checkboxes
- Search and filter functionality
- Multiple list support
- Task drag-and-drop reordering

---

## Author

Developed by [Bahaa Jber](https://github.com/BahaaJber1).
