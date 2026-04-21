#          CONSUMER SENTIMENT ANALYSIS WEB APP

##  OVERVIEW
A web app that analyzes user text and classifies sentiment using NLP.

- 💚 Positive  
- ❤️ Negative  
- 💛 Neutral  

Also shows a **confidence score** based on sentiment strength.

---

##  TECH STACK
- React + Vite  
- Node.js + Express  
- Sentiment (NPM)  
- Tailwind CSS  
- tsparticles  

---

##  FEATURES
- Real-time sentiment analysis  
- Clean responsive UI  
- Animated background  
- Confidence scoring  

---

##  PROJECT STRUCTURE
sentiment-app/  
├── backend/  
│   └── index.js  
├── src/  
│   ├── App.jsx  
│   ├── main.jsx  
│   ├── index.css  
├── public/  
├── index.html  
└── package.json  

---

##  SETUP

```bash
git clone https://github.com/luffydnika63/consumer-sentiment-analysis.git
cd sentiment-app
npm install
npm install express sentiment cors
```

---

##  RUN

```bash
node backend/index.js
npm run dev
```

Open: http://localhost:5173

---

##  HOW IT WORKS
1. User enters text  
2. Sent to backend API  
3. Sentiment library processes it  
4. Result + confidence displayed  

---

##  EXAMPLE
**Input:**  
`This product is amazing!`  

**Output:**  
`Positive (High Confidence)`

---

##  LIMITATIONS
- Uses basic NLP (not ML)  
- No database  
- Accuracy depends on input  

---

## 🔮 FUTURE IMPROVEMENTS
- Advanced ML models  
- Cloud deployment  
- Multi-language support  

---



