import {StrictMode} from "react";//help to write better and safer code by highlightin the problem. 
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";//clientside router
//when the user navigates to different URLs in the application, React Router will render the corresponding components specified in the Route components without reloading the entire page. 
import App from './App';
const root = createRoot(document.getElementById("app"))
root.render(
   <StrictMode>
         <Router>
             <App/>
         </Router>
    </StrictMode>
    )