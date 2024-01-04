# Notes-WebApp

This is a note-taking WebApp created using expressjs, mongodb, nodejs.

## Prerequisites
Before you begin, ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)

## Installation
1. Clone the repository:

```bash
git clone https://github.com/sumit1804/Notes-WebApp.git
```
2. Navigate to the project directory:
```bash
cd express-mongodb-project
```

3. Install dependencies:
```bash
npm install
```

## Usage
1. Run the application:
```bash
npm start
```
2. Access the API at http://localhost:5000/api/notes


## API Endpoints:

1. **Get All Notes**
   - Endpoint: `GET /api/notes`
   - Description: Get all notes from the database.
   - Response:
     - Status: 200 OK
       - Body: `{ "allNotes": [...notes] }`
     - Status: 404 Not Found (if no notes found)
       - Body: `{ "message": "No Notes found" }`
     - Status: 500 Internal Server Error (for other errors)
       - Body: `{ "message": "Internal server error..." }`

2. **Get Note by ID**
   - Endpoint: `GET /api/notes/:id`
   - Description: Get a single note by its ID.
   - Response:
     - Status: 200 OK
       - Body: `{ "note": { "title": "Note Title", "content": "Note Content", "createdAt": "Timestamp", "updatedAt": "Timestamp" }, "message": "Note found successfully" }`
     - Status: 404 Not Found (if note not found)
       - Body: `{ "message": "Note not found" }`
     - Status: 500 Internal Server Error (for other errors)
       - Body: `{ "message": "Internal server error..." }`

3. **Create Note**
   - Endpoint: `POST /api/notes/addNote`
   - Description: Create a new note in the database.
   - Request Body: `{ "title": "Note Title", "content": "Note Content" }`
   - Response:
     - Status: 200 OK
       - Body: `{ "note": { "title": "Note Title", "content": "Note Content", "createdAt": "Timestamp" }, "message": "Note created successfully" }`
     - Status: 400 Bad Request (if title or content length is too small)
       - Body: `{ "message": "Title length too small" }` or `{ "message": "Content is very less" }`
     - Status: 500 Internal Server Error (for other errors)
       - Body: `{ "message": "Internal server error..." }`

4. **Update Note**
   - Endpoint: `PUT /api/notes/updateNote/:id`
   - Description: Update the content of an existing note.
   - Request Body: `{ "content": "Updated Note Content" }`
   - Response:
     - Status: 200 OK
       - Body: `{ "note": { "title": "Note Title", "content": "Updated Note Content", "createdAt": "Timestamp", "updatedAt": "Timestamp" }, "message": "Note updated successfully" }`
     - Status: 404 Not Found (if unable to update note)
       - Body: `{ "message": "Unable to update note" }`
     - Status: 500 Internal Server Error (for other errors)
       - Body: `{ "message": "Internal server error..." }`

5. **Delete Note**
   - Endpoint: `DELETE /api/notes/delete/:id`
   - Description: Delete a note from the database.
   - Response:
     - Status: 200 OK
       - Body: `{ "note": { "title": "Note Title", "content": "Note Content", "createdAt": "Timestamp", "updatedAt": "Timestamp" }, "message": "Note deleted successfully" }`
     - Status: 404 Not Found (if unable to delete note)
       - Body: `{ "message": "Unable to delete note" }`
     - Status: 500 Internal Server Error (for other errors)
       - Body: `{ "message": "Internal server error..." }`
