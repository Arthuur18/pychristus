import { iniciarExercicios } from "../assets/js/exercises.js";
import home from "./pages/Home.js";
import fundamentals from "./pages/Fundamentals.js";
import vars from "./pages/Vars.js";
import dataTypes from "./pages/DataTypes.js";
import operators from "./pages/Operators.js";
import flowControl from "./pages/FlowControl.js";
import loops from "./pages/Loops.js";
import dataStructures from "./pages/DataStructures.js";
import functions from "./pages/Functions.js";
import exercises from "./pages/Exercises.js";

class Router {
  constructor() {
    this.routes = {};
    this.currentRoute = null;
  }

  // Define a route (path → view function)
  route(path, view) {
    this.routes[path] = view;
  }

  // Navigate to a path (update URL and render view)
  navigate(path) {
    history.pushState(null, "", path);
    this.renderView(path);
  }

  // Render the view for a given path
  renderView(path) {
    const view = this.routes[path] || this.routes["/404"]; // Fallback to 404
    this.currentRoute = path;

    view(); // Call the view function to render
  }

  // Initialize router (handle initial load and popstate)
  init() {
    // Handle initial page load
    window.addEventListener("DOMContentLoaded", () => {
      this.renderView(window.location.pathname);
    });

    // Handle back/forward buttons
    window.addEventListener("popstate", () => {
      this.renderView(window.location.pathname);
    });
  }
}

function renderHome() {
  const app = document.querySelector(".main-content");
  const homeTemplate = home();

  app.innerHTML = "";
  app.innerHTML = homeTemplate;
}

function renderFundamentals() {
  const app = document.querySelector(".main-content");
  const fundamentalsTemplate = fundamentals();

  app.innerHTML = "";
  app.innerHTML = fundamentalsTemplate;
}

function renderVars() {
  const app = document.querySelector(".main-content");
  const varsTemplate = vars();

  app.innerHTML = "";
  app.innerHTML = varsTemplate;
}

function renderDataTypes() {
  const app = document.querySelector(".main-content");
  const dataTypesTemplate = dataTypes();

  app.innerHTML = "";
  app.innerHTML = dataTypesTemplate;
}

function renderOperators() {
  const app = document.querySelector(".main-content");
  const operatorsTemplate = operators();

  app.innerHTML = "";
  app.innerHTML = operatorsTemplate;
}

function renderFlowControl() {
  const app = document.querySelector(".main-content");
  const flowControlTemplate = flowControl();

  app.innerHTML = "";
  app.innerHTML = flowControlTemplate;
}

function renderLoops() {
  const app = document.querySelector(".main-content");
  const loopsTemplate = loops();

  app.innerHTML = "";
  app.innerHTML = loopsTemplate;
}

function renderDataStructures() {
  const app = document.querySelector(".main-content");
  const dataStructuresTemplate = dataStructures();

  app.innerHTML = "";
  app.innerHTML = dataStructuresTemplate;
}

function renderFunctions() {
  const app = document.querySelector(".main-content");
  const functionsTemplate = functions();

  app.innerHTML = "";
  app.innerHTML = functionsTemplate;
}

function renderExercises() {
  const app = document.querySelector(".main-content");
  const exercisesTemplate = exercises();

  app.innerHTML = "";
  app.innerHTML = exercisesTemplate;
  iniciarExercicios(document);
}

const router = new Router();

// Define routes
router.route("/", renderHome);
router.route("/fundamentals", renderFundamentals);
router.route("/vars", renderVars);
router.route("/data-types", renderDataTypes);
router.route("/operators", renderOperators);
router.route("/flow-control", renderFlowControl);
router.route("/loops", renderLoops);
router.route("/data-structures", renderDataStructures);
router.route("/functions", renderFunctions);
router.route("/exercises", renderExercises);

// Start the router
router.init();

export default router;
