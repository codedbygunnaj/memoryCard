📘 Memory Card Game (React + Vite)

A simple Pokémon Memory Card Game built with React and deployed on Netlify.

👉 Live Demo: https://memorychecker.netlify.app/

🚀 Features
React Functional Components: modular design with App.jsx and ItemCard.jsx.

Hooks:
1. useState → for score tracking, best score, clicked memory, and card shuffling.

2. useEffect → for fetching Pokémon data from API.

3. API Integration — uses PokeAPI to fetch Pokémon names and sprites dynamically.

Game Logic:

1. Click a card → increases score if not clicked before.
2. Clicking the same card twice → resets score.
3. Cards shuffle after every click.
4. Best score is tracked across rounds.

Styling:
- CSS Grid for layout (4×3 board).
- Custom fonts, hover effects, and responsive design.

🛠️ Tech Stack

- React (Vite) : fast development and build tool.
- JavaScript (ES6+) : functional programming style.
- CSS Grid & Flexbox : responsive layout and polish.
- Netlify : deployment and hosting.

🎮 How to Play
1. Click on a Pokémon card.
2. Don’t click the same Pokémon twice!
3. Each unique click increases your score.
4. Cards shuffle after every click.
5. Try to beat your Best Score.

📖 Learning Outcomes
This project was built as a learning exercise to practice:
- React fundamentals (components, props).
- State management with useState.
- Side effects and data fetching with useEffect.
- API integration and JSON parsing.
- Event handling (onClick) and lifting state up.
- CSS Grid for multi‑card layout.
- Deployment workflows (Netlify).

🌐 Deployment
Built with npm run build → output in dist/.
Deployed on Netlify with publish directory set to dist.
