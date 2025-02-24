# IT3133_ReactNative_StudentCare_MobileApp 🎓📱

Welcome to the **UoV Student Care** Mobile App built with React Native! This app provides essential features for students, including their profiles, courses, and subjects. Students can log in, view their personal details, access course information, and check their subject marks with ease.

## 🛠 Technologies Used

- **React Native** – A framework for building native apps using React.
- **React Native Paper** – A library that provides material design components for React Native.
- **React Navigation** – For navigation between different screens.
- **React Native Safe Area Context** – Ensures the app UI adjusts to safe areas on various devices.
  
## 🧑‍💻 Setup Instructions

To get started with the project, follow the steps below:

1. **Clone the Repository**
   Clone the repository to your local machine using the following command:

   ```bash
   git clone https://github.com/madurangaPrabhath/IT3133_ReactNative_StudentCare_MobileApp.git
   ```

2. **Navigate to the Project Directory**
   Go to the project folder:

   ```bash
   cd MobileApp
   ```

3. **Install Dependencies**
   Install the necessary dependencies using npm or yarn:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

4. **Run the App**
   To start the app, use the following command:

   ```bash
   npm start
   ```

   or

   ```bash
   yarn start
   ```

   Your app will be running on your mobile device or emulator.

## 📱 Features

- **Login Page**: Secure login for students using their username and password.
- **Home Page**: Displays a tab-based navigation with sections like Profile, Courses, and Subjects.
- **Profile**: Displays student details including personal information and contact details.
- **Courses**: Information about the student's course, including department, code, and description.
- **Subjects**: A list of subjects and marks along with average scores.

## 🚀 Deployment

To deploy the app for Android or iOS, use the following commands:

- **For iOS:**

   ```bash
   npx react-native run-ios
   ```

- **For Android:**

   ```bash
   npx react-native run-android
   ```

## 🔧 Components

The app is built using reusable React Native components. Below is an overview of the key components:

- **App.js**: The main entry point of the app, where the layout is set up, including navigation and screens.
- **Home.js**: Contains the navigation for **Profile**, **Courses**, and **Subjects** using a bottom navigation bar.
- **Login.js**: The login screen where users can enter their credentials to access the app.
- **Profile.js**: Displays the student’s profile, including personal and contact information.
- **Courses.js**: Displays detailed information about the student's course.
- **Subjects.js**: Displays the list of subjects with marks and averages.

## 🛠️ Development Tools

- **VS Code** – The recommended code editor for this project.
- **React Native Debugger** – For debugging the app during development.

## 🧑‍🤝‍🧑 Contributing

We welcome contributions to improve the app! If you'd like to contribute, please follow these steps:

1. **Fork the repository.**
2. **Create a new branch**: 
   ```bash
   git checkout -b feature/your-feature
   ```
3. **Commit your changes**:
   ```bash
   git commit -am 'Add new feature'
   ```
4. **Push to the branch**:
   ```bash
   git push origin feature/your-feature
   ```
5. **Open a pull request.**

Please ensure that your code adheres to the project's coding standards and write clear commit messages.

## 🖥️ Output

### Example User Flow:

1. Login Screen:
   
![Login 1](https://github.com/user-attachments/assets/af9f5992-1534-435a-8ac4-f39d85409122)
![Login 2](https://github.com/user-attachments/assets/a980e5a7-14a0-46c3-9cc1-4ab48e088ad9)

2. Home Screen (Tab Navigation):
   
![Profile](https://github.com/user-attachments/assets/1ee2007a-4884-45e7-84f2-9ddac83dc53f)
![Courses](https://github.com/user-attachments/assets/eed388fa-8eac-4e7f-aac9-ca25b64ca57f)
![Subjects](https://github.com/user-attachments/assets/18573057-8783-49fd-ae4a-eef5768414bf)

### Example Login:
**Input**: Student Information  
**Output**: Displays personal info such as name, age, gender, contact details, etc.

```plaintext
Username: Alice.j
Password: s123
```

## 📝 License

This project is licensed under the MIT License – see the [LICENSE](LICENSE) file for details.
