export function createCounter(){
    let count = $state(0);

    function increment(){
        count += 1
    }

    function decrement(){
        if(count > 0){
            count -= 1
        }
    }

    function reset(){
        count = 0
    }

    return {
        get count() {return count},
        increment,
        decrement,
        reset
    };
}