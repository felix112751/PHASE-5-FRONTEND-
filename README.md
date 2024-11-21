Book Club App


Welcome to the Book Club App! This application allows users to create and manage book clubs, share book recommendations, and engage in discussions about their favorite reads. Built with modern web technologies, this app is designed to provide a seamless experience for book lovers.

Tech Stack
Frontend:

React
TypeScript
Tailwind CSS
Backend:

Python (Flask/flask)
PostgreSQL
Features
User authentication and profiles
Create and join book clubs
Add and manage book recommendations
Discussion threads for each book
Responsive design for mobile and desktop
Getting Started
To get a local copy up and running, follow these steps:

Prerequisites
Make sure you have the following installed:

Node.js (for the frontend)
Python (for the backend)
PostgreSQL
Cloning the Repository
Clone the repository:

bash

Verify

Open In Editor
Edit
Copy code
git clone https://github.com/yourusername/book-club-app.git
Navigate into the project directory:

bash

Verify

Open In Editor
Edit
Copy code
cd book-club-app
Setting Up the Frontend
Navigate to the frontend directory:

bash

Verify

Open In Editor
Edit
Copy code
cd frontend
Install the necessary packages:

bash

Verify

Open In Editor
Edit
Copy code
npm install
Start the development server:

bash

Verify

Open In Editor
Edit
Copy code
npm start
The frontend will be running on phase-5-frontend.vercel.app

Setting Up the Backend
Navigate to the backend directory:

bash

Verify

Open In Editor
Edit
Copy code
cd backend
Create a virtual environment (recommended):

bash

Verify

Open In Editor
Edit
Copy code
python -m venv venv
Activate the virtual environment:

On Windows:
bash

Verify

Open In Editor
Edit
Copy code
venv\Scripts\activate
On macOS/Linux:
bash

Verify

Open In Editor
Edit
Copy code
source venv/bin/activate
Install the required packages:

bash

Verify

Open In Editor
Edit
Copy code
pip install -r requirements.txt
Set up the PostgreSQL database:

Create a new database for the application.
Update the database connection settings in your backend configuration file.
Run database migrations (if applicable):

bash

Verify

Open In Editor
Edit
Copy code
python manage.py migrate
Start the backend server:

bash

Verify

Open In Editor
Edit
Copy code
python run.py  # or `flask run` for flask
The backend will be running on https://phase-5-backened.onrender.com

Environment Variables
Make sure to set the following environment variables in your .env file or your environment:


Verify

Open In Editor
Edit
Copy code
DATABASE_URL='postgresql://backened_bookclub_user:Hyo3I9OEdpsm1u1LMIZho2eLJnPsJux1@dpg-csv4e4jv2p9s73cs58ag-a.oregon-postgres.render.com/backened_bookclub'
SECRET_KEY=your_secret_key
Contributing
Contributions are welcome! If you have suggestions for improvements or find bugs, please open an issue or submit a pull request.

License
This project is licensed under the MIT License - see the LICENSE file for details.


Happy reading! 📚
