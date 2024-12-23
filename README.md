# Hospital Chat App

A **Hospital Chat Application** designed to facilitate seamless communication between patients and hospital staff. This project provides an easy-to-use interface for chatting and managing messages in a secure and organized manner.

## Features

- **Real-time Messaging:** Enables instant communication between users.
- **User Authentication:** Secure login and signup functionality.
- **Role-based Access Control:** Separate interfaces for patients and hospital staff.
- **User-friendly Interface:** Clean and intuitive design for ease of use.
- **Message History:** Persistent chat history for future reference.
- **Secure Communication:** Data encryption for secure message transmission.
- **Stream Integration:** Utilizes Stream for real-time chat and database management.
  - Built-in database for message storage.
  - Advanced moderation tools (e.g., profanity filters, message flags).
  - Scalable infrastructure for high traffic.
  - Rich media support (images, videos, files).

## Tech Stack

- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** Stream's built-in database
- **Authentication:** JSON Web Tokens (JWT)
- **Real-time Communication:** Stream

## Installation and Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/harsh-791/Hospital_Chat_App.git
   cd Hospital_Chat_App
   ```

2. **Install dependencies**
   ```bash
   # For the backend
   cd backend
   npm install

   # For the frontend
   cd ../frontend
   npm install
   ```

3. **Configure environment variables**
   - Create a `.env` file in the `backend` directory with the following keys:
     ```env
     PORT=5000
     MONGO_URI=<your-mongodb-connection-string>
     JWT_SECRET=<your-jwt-secret>
     STREAM_API_KEY=<your-stream-api-key>
     STREAM_API_SECRET=<your-stream-api-secret>
     STREAM_APP_ID=<your-stream-app-id>
     ```

4. **Run the application**
   - Start the backend server:
     ```bash
     cd backend
     npm start
     ```
   - Start the frontend development server:
     ```bash
     cd ../frontend
     npm start
     ```

5. **Access the application**
   Open your browser and navigate to `http://localhost:3000`.

## Folder Structure

```
Hospital_Chat_App/
├── backend/          # Backend code (Node.js, Express.js)
├── frontend/         # Frontend code (React.js)
├── README.md         # Project documentation
└── .gitignore        # Ignored files and directories
```

## Using Stream in the Application

- **Message Moderation:** Leverage Stream's moderation tools to manage chat environments effectively. Configure filters and rules through the dashboard.
- **Scalability:** Stream ensures a highly scalable chat solution that can handle a large number of concurrent users.
- **Customizable Chat UI:** Easily customize the chat interface using Stream's React components.
- **Rich Media Support:** Upload and share images, videos, and files within chats effortlessly.


## License

This project is licensed under the [MIT License](LICENSE).

---



