<script>
    import algoliasearch from "algoliasearch/lite"
    import {onMount} from "svelte"
    import {resultstore} from "../stores/resultsfbsc";
    import {querystore} from"../stores/querystore";
    let searchClient;
    let index;
    let algoliaAppId = "SG8XZAM7JF"
    let algoliaPublicKey = "bc5c6545619049347419ee4574613e3c"
    $: query = ""
    $: resultlist = []
    $: fireauth = false
    onMount(() => {
        if (window.location.href.includes("login")){
            fireauth = true
        }
        searchClient = algoliasearch(
            algoliaAppId, algoliaPublicKey
        )
        index = searchClient.initIndex("camps")
        const unsubsribe = querystore.subscribe(data => {
            query = data 
            return
        })

    })
    
    async function search(){
        const results = await index.search(query)
        resultlist = results.hits
        resultstore.set(resultlist)
        if (query === "") {
            window.location.href = 'http://localhost:5173'
        } else if (!window.location.toString().includes("search")){
            window.location.href = 'http://localhost:5173/#/' + "search/" + query
        }
    }
</script>
    
<div class="searchBar">
    <div class="logo">
        <img src="./LOGO-removebg-preview.png" alt="custom camp logo"/>
    </div>
    {#if !fireauth}
        <div>
            <label for="searchBar"> What camp are you looking for today? </label>
            <form on:submit|preventDefault={search}>
                <input name="searchBar" type="text" bind:value={query}>
                <button type="submit"><img src="./searching (2).png" alt="A search icon as if you need to know" class="searchlogo"></button>
            </form>
        </div>
    {/if}
</div>
<style>
    .searchBar{
        margin: 0 auto;
        position: relative;
        max-width: 850px;
        padding-top: 5%;
    }
    .searchBar input {
        min-width: 100%;
        position: relative;
        min-height: 50px;
        transition: all 300ms linear;
        background-color: transparent;
        color: white;
        font-weight: bold;
        border-radius: 5px;
        border: 2px solid white;
        margin: 0 auto;
    }
     .searchBar input:hover {
        background-color: white;
        color: black;
    }

    .logo img{
        width: 200px;
    }

    .logo{
        display: flex;
        justify-content: center;
    }

    .searchBar label{
        position: relative;
        font-size: 50px;
        margin-bottom: 100px;
        color: white;
    }
    .searchlogo{
            height: 50px
    }
    .searchBar form{
        display: flex;
        grid-template-rows: 1fr;
        max-height: 50px;
    }
    .searchBar button{
        padding: 0;
        margin: 0;

        background: transparent;
        border: none;
    }
</style>