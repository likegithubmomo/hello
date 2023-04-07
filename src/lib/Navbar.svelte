
<script>
    import algoliasearch from "algoliasearch/lite"
    import {onMount} from "svelte"
    import {resultstore} from "../stores/resultsfbsc"
    import {querystore} from"../stores/querystore"
    import SearchBar from "./searchBar.svelte";
    import {getAuth, onAuthStateChanged} from "firebase/auth"

    let searchClient;
    let index;
    let algoliaAppId = "SG8XZAM7JF"
    let algoliaPublicKey = "bc5c6545619049347419ee4574613e3c"
    $:query=""
    $:resultlist=[]
    $:isLoggedIn=false
    let auth = getAuth()
    onAuthStateChanged(auth, user => {
        if(user !== null){
            isLoggedIn = true
        }
    })

    function handlelogin(){
        console.log("go play minecraft and stop abusing dev tools")
        window.location.replace("http://localhost:5173/#/login")
    }
    function handleLogout(){
        console.log("go play minecraft and stop abusing dev tools")
        let auth = getAuth()
        auth.signOut().then(() =>{
            console.log("alright, i logged you out NOW go play minecraft")
            isLoggedIn = false
        })
        window.location.replace("http://localhost:5173/#/login")
    }
</script>

<div class="navbar">
    <div class={`button-container ${isLoggedIn ? "logged-in" : ""}`}>
        {#if isLoggedIn}
            <button class="sign-out-btn" on:click={handleLogout}>Log out</button>
        {:else}
            <button class="login-btn" on:click={handlelogin}>Log In</button>
            <button class="sign-up-btn" on:click={handlelogin}>Sign Up</button>
        {/if}
    </div>
</div>

<style>

    .logo{
        display: flex;
        justify-content: left;
    }

    .searchBar{
        margin: 0 auto;
        position: relative;
        max-width: 850px;
        padding-top: 5%;
    }

    .searchlogo{
            height: 50px;
        position: relative;
        font-size: 50px;
        margin-bottom: 100px;
        color: white;
    }

    .searchBar button{
        padding: 0;
        margin: 0;

        background: transparent;
        border: none;
    }
    .navbar {
        position: relative;
    }
    .button-container {
        min-width: 150px;
        position: absolute;
        right: 30px;
        top: 20px;
        display: flex;
        justify-content: space-between;
    }

    .logged-in{
        justify-content: flex-end;
    }
    .sign-up-btn {
        transition: all 300ms linear;
        background-color: red;
        color: white;
        font-weight: bold;
        border-radius: 5px;
        border: 0px solid white;
    }

    .login-btn {
        transition: all 300ms linear;
        background-color: transparent;
        color: white;
        font-weight: bold;
        border-radius: 5px;
        border: 2px solid white;
    }
    .sign-up-btn:hover {
        background-color: white;
        color: black;
        font-weight: bold;
        border-radius: 5px;
        border: 0px solid red;
    }

    .login-btn:hover {
        background-color: white;
        color: black;
    }

    .sign-out-btn {
        transition: all 300ms linear;
        background-color: transparent;
        color: white;
        font-weight: bold;
        border-radius: 5px;
        border: 2px solid white;
    }

    .sign-out-btn:hover {
        background-color: white;
        color: black;
    }
    

</style>