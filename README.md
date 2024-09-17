# Health Tracking App

A Health Tracking App that allows users to log and track their daily health metrics like body temperature, blood pressure, and heart rate. Users can add new entries, view their history, and edit or delete past entries. The app is designed with a clean UI for easy navigation, data input, and viewing.

## Features

- Add health records with fields for date, body temperature, blood pressure, and heart rate.
- View all recorded metrics in a dashboard.
- Edit or delete health records.
- Search and filter records by date or health metrics (e.g., heart rate above a certain threshold).
- Mobile-friendly and responsive UI.

## Technology Stack

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Deployment**: Vercel (Frontend), Render (Backend)

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/en/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (for database)

## Setup Instructions

### Step 1: Clone the Repository

```bash
git clone https://github.com/Archana-Kondoju/health-tracking-app
cd health-tracking-app
```

### Step 2: Install Dependencies

For both the frontend and backend, you need to install the required dependencies.

1. **Backend**:

```bash
cd health-tracking-server
npm install
```

2. **Frontend**:

```bash
npm install
```

### Step 3: Set Up Environment Variables

Create a `.env` file in the `server` directory and add the following:

```bash
# .env file
PORT=5000
MONGODB_URI=mongodb://localhost:27017/healthtrackingapp
```


### Step 4: Run MongoDB (if using MongoDB)

Make sure MongoDB is running locally. You can start MongoDB using:

```bash
mongodb
```

### Step 5: Start the Backend Server

```bash
cd health-tracking-server
npm start
```

The backend API should now be running on `http://localhost:5000`.

### Step 6: Start the Frontend

In a separate terminal:

```bash
cd health-tracking-app
npm start
```

The React app should now be running on `http://localhost:3000`.

### API Endpoints

1. **POST /health-records**: Add a new health record.
2. **GET /health-records**: Get all health records.
3. **GET /health-records/:id**: Get a specific health record by ID.
4. **PUT /health-records/:id**: Update a health record by ID.
5. **DELETE /health-records/:id**: Delete a health record by ID.

### Folder Structure
```
.
├── health-tracking-app                  # Frontend (React)
│   ├── src
│   └── public
├── health-tracking-server                  # Backend (Node.js & Express)
│   ├── config           
│   ├── models               # Database schemas/models
│   ├── routes               # API route definitions
│   └── server.js            # Main Express app file
└── README.md                # Project documentation
```

### Sample API Call

To test the API, you can use tools like Postman. For example, to add a health record:

```bash
POST http://localhost:5000/health-records
Content-Type: application/json

{
  "date": "2024-09-15",
  "bodyTemperature": 37,
  "bloodPressure": 90,
  "heartRate": 75
}
```

### Deployment Instructions

1. **Backend**: Deploy the backend to Render.
2. **Frontend**: Deploy the frontend to Vercel.

After deploying, update the frontend to point to the live API URL (instead of the local one). This can be done in the React app's environment variables (\`.env\`).

```bash
REACT_APP_API_URL=https://your-backend-api-url.com
```

### Running Tests (Optional)

To run any tests (if available), you can execute:

```bash
npm test
```

### Troubleshooting

1. **MongoDB Connection Error**: Ensure MongoDB is running and the URI is correct in the \`.env\` file.
2. **CORS Issues**: If facing CORS errors, make sure the backend allows requests from the frontend URL.
3. **Port Conflicts**: Make sure no other service is running on port 3000 (frontend) or 5000 (backend).

### Live Demo and GitHub Repository

- **Live Demo**: [https://health-tracking-app-rosy.vercel.app/](https://health-tracking-app-rosy.vercel.app/)
- **GitHub Repository**: [https://github.com/Archana-Kondoju/health-tracking-app](https://github.com/Archana-Kondoju/health-tracking-app)
