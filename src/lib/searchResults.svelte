<script>
    import { onMount } from "svelte";
    import {resultstore} from "../stores/resultsfbsc";
    import SearchBar from "../lib/searchBar.svelte";
    import algoliasearch from "algoliasearch/lite"
    import {querystore} from"../stores/querystore"
    import BadCampWidget from "./BadCampWidget.svelte";

    import Swiper, { Navigation } from "swiper";
    export let params;
    $: results = [];

    onMount(() => {
        const unsubscribe = resultstore.subscribe((data) => {
            results = data
        })

        if (params.query === "") {
            resultstore.set([])
        }
    })
    let searchClient;
    let index;
    let algoliaAppId = "SG8XZAM7JF"
    let algoliaPublicKey = "bc5c6545619049347419ee4574613e3c"
    $: query = ""
    $: resultlist = []
    // const swiper = new Swiper('.search-page', {
    //         modules: [Navigation],
    //         slidesPerView: 4,
    //         // spaceBetween: 100,
    //         navigation: {
    //             nextEl: '.swiper-button-next',
    //             prevEl: '.swiper-button-prev'
    //         }
    // });
    onMount(() => {
        

        searchClient = algoliasearch(
            algoliaAppId, algoliaPublicKey
        )
        index = searchClient.initIndex("camps")
        const unsubsribe = querystore.subscribe(data => {
            query = data 
            return
        })

    })
    

</script>

<div class="swiper search-page">
    <SearchBar/>
    {#if results.length < 1}
        <h3>No results found for "{params.query}"</h3>
    {:else}
    <ul class="swiper-wrapper">
        {#each results as result}
            <li class="resultitem swiper-slide">
                <BadCampWidget camp={result} />
            </li>
        {/each}
    </ul>
    <button class="swiper-button-next"></button>
    <button class="swiper-button-next"></button>
    {/if}
</div>
<style>
    .resultitem{
        color:white;
        font-size:24px;
        font-weight:100;
        list-style:none;
        margin-bottom:25px;
    }

    ul {
        text-align: center;
        display: flex;
        gap: 60px;
        width: 1200px;
        height: auto;
        margin: 0 auto;
    }
</style>