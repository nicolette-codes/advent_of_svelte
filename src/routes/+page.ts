import type { KidsTally } from '$lib/types.js';
export async function load({fetch}){
    const res = await fetch(`https://advent.sveltesociety.dev/data/2023/day-one.json`);
    const tallys: KidsTally[] = await res.json();
    return { tallys };
}