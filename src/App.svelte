<script>
  import Navbar from "./lib/Navbar.svelte";
  import { initializeApp } from "firebase/app";
  import { firebaseConfig } from "./utils/firebaseConfig";
  import Home from "./pages/Home.svelte";
  import Login from "./pages/login.svelte";
  import SearchResults from "./lib/searchResults.svelte";

  import Router from "svelte-spa-router";
  const app = initializeApp(firebaseConfig);
</script>

<main>
  <Navbar />
  <Router routes={{
    "/": Home,
    "/search/:query":SearchResults,
    "/login":Login
  }}/>
</main>

<style>
  main {
		position: relative;
		background: linear-gradient(to bottom right, #ca01e1, #e50301);
		min-height: 98.5vh;
		background-size: cover;
    width: 100vw;
    height: 100vh;
	}
</style>
