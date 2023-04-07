import { writable } from 'svelte/store';

export const ExampleCamps = writable([
    { 
        name: "Skyhawks tennis camp",
        description: "an actually good sports camp for once",
        rating: 5
    },

    { 
        name: "Mountaineers", 
        description: "A kinda sketchy camp",
        rating: 2
    },
])