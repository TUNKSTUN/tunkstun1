# 💼 Portfolio Website!

<p align="center">
![Alt Text](portfolio.png)
</p>

*This is a portfolio website built using ReactJS, Firebase, Tailwind, and EmailJS.* 
> Hosted on: https://www.tunkstun.web.app

## Technologies Used 

- ReactJS 🚀
- Firebase 🔥
- Tailwind CSS 🎨
- EmailJS 📧

## 📝 How to Connect React App to Firebase

1. Create a Firebase project in the Firebase console.
2. In your project settings, add a new web app.
3. Copy the Firebase configuration object provided.
4. In your React app, install the Firebase SDK using `npm install firebase`.
5. Import Firebase in your React components where needed and initialize it with the configuration object.
6. You are now ready to use Firebase services in your React app!

## 📝 How to Configure EmailJS

1. Create an account on [EmailJS](https://www.emailjs.com/) and log in.
2. Create a new email template for the contact form.
3. In your React app, install EmailJS using `npm install emailjs-com`.
4. Import EmailJS in your React components where needed.
5. Set up your EmailJS credentials in your React component using the `emailjs.init()` method.
6. Use the `emailjs.send()` method to send emails from your contact form.

### 🌐 Firebase Hosting Steps

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize Firebase hosting
firebase init hosting

# Follow the prompts and configure your hosting settings
