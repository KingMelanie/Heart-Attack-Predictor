#Heart Attack Prediction Project

###Introduction
The Heart Attack Prediction Project is designed to assess the risk of heart attacks based on various medical attributes using a machine learning model. This project integrates a predictive model into a user-friendly website to help users evaluate their heart health risk.

###Features
Predictive Analysis: Utilizes a Support Vector Machine (SVM) model to predict heart attack risk based on user input.
Interactive Chatbot: Provides guidance and information on heart health via an advanced chatbot integrated using OpenAI's API.
Secure User Authentication: Ensures that access to the chatbot and prediction features is secure and user-specific.
Responsive Web Design: Crafted using Hono for backend, Bootstrap for responsive design, and Alpine.js for frontend dynamics.
###Tech Stack
Hono: Lightweight web framework used for backend operations.
Bootstrap & Alpine.js: Used for crafting a responsive and dynamic frontend.
OpenAI: Powers the intelligent chatbot.
Heroku: Hosts the SVM model.
MySQL: Manages user data and authentication securely.

###Project Structure
    ├── server/               # Server-side scripts and configuration
    ├── client/               # Client-side HTML, CSS, and JavaScript files
    ├── model/                # Machine learning model files and scripts
    ├── data/                 # Dataset and data processing scripts
    ├── README.md             # Project documentation
    └── .gitignore            # Specifies intentionally untracked files to ignore
    
###Installation
Clone the Repository
git clone https://github.com/yourusername/heart-attack-prediction.git
cd heart-attack-prediction

###Set Up Environment
bash
npm install

### Install dependencies
pip install -r requirements.txt

Start the Server
bash
# Start the Hono server
npm run dev

### Access the Application
Open your browser and visit http://localhost:3000 to view the application.

### Usage
Login/Signup: Create an account and log in.
Enter Medical Details: Input your medical details like age, cholesterol levels, etc.
Get Prediction: Submit your details to receive a heart attack risk assessment.
Chat with Bot: Use the chatbot for additional information and guidance.

###Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue to discuss potential changes or additions.

###License
This project is licensed under the MIT License - see the LICENSE file for details.

Special thanks to;
  Project Supervisor: Prof. Ahmed Banafa
  Partner: Adebodun Adeleye, https://github.com/Debodun
  Consultants: 
    Dr. Chollette Olisah (Machine Learning Model), https://github.com/chollette
    Benqoder (Fullstack Developer), https://github.com/benqoder
    Kenechukwu Aniekwena (Product Development), https://github.com/fessor10
