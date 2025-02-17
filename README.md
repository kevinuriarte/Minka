# 🚀 Minka - Developers Notes & Questions Forum  

![Minka Banner](./public/images/homepage.png)  

## 🌍 About Minka  
Minka is a **modern, responsive** developer forum where programmers can:  
✅ **Ask & Answer Questions** - Share knowledge and get help.  
✅ **Upvote & Downvote Posts** - Highlight valuable content.  
✅ **Comment & Discuss** - Engage with the community.  
✅ **User Authentication** - Secure account creation & login.  
✅ **Optimized for Mobile & Desktop** - Looks great on any device.  

🔗 **Live Demo:** [Click Here](https://github.com/kevinuriarte)   

---

## 📌 Table of Contents  
- [Installation](#installation)  
- [Usage](#usage)  
- [Technologies Used](#technologies-used)  
- [Contributing](#contributing)  
- [Tests](#tests)  
- [Questions](#questions)  
- [License](#license)  

---

## ⚙️ Installation  
To set up Minka on your local machine, follow these steps:  

```bash
# Clone the repository
git clone https://github.com/kevinuriarte/Minka.git  
cd Minka
```
```bash
# Install dependencies
npm install  
```
# Set up environment variables 
```bash
cp .env.example .env  # Then update .env with your MySQL credentials  
```
# Run database migrations 
```bash
npx sequelize-cli db:migrate  
```
# Start the application
```bash
npm start
```

## 🚀 Usage  
1. **Sign Up / Log In** - Create an account to interact.  
2. **Create Posts** - Share programming questions or insights.  
3. **Vote & Comment** - Engage with other developers.  
4. **Stay Updated** - Browse and contribute to the latest discussions.  

---

## 🛠️ Technologies Used  
- **Frontend:** Handlebars, CSS, JavaScript  
- **Backend:** Node.js, Express.js  
- **Database:** MySQL, Sequelize ORM  
- **Authentication:** Express-session, bcrypt  
- **Deployment:** Heroku (JawsDB for MySQL)  

---

## 🤝 Contributing  
Contributions are welcome! To contribute:  
1. Fork the repository.  
2. Create a new branch (`git checkout -b feature-branch`).  
3. Commit your changes (`git commit -m "Added new feature"`).  
4. Push the branch (`git push origin feature-branch`).  
5. Open a Pull Request.  

---

## 🧪 Tests  
To run tests, use:  
```bash
npm test
```

## ❓ Questions  
For questions, reach out:  
📧 **Email:** [kevinauriarte@gmail.com](mailto:kevinauriarte@gmail.com)  
🔗 **GitHub:** [kevinuriarte](https://github.com/kevinuriarte)  

---

## 📜 License  
This project is licensed under the **MIT License**.  