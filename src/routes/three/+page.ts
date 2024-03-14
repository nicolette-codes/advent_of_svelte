import type { Presents } from '$lib/types.js';

export async function load({fetch}){
    const res = await fetch(`https://advent.sveltesociety.dev/data/2023/day-three.json`)
    const presents: Presents[] = await res.json();
    return { presents };
}