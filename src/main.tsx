
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { UILibrary } from './components/UILibrary'

// Initialize the UI Library
UILibrary;

createRoot(document.getElementById("root")!).render(<App />);
