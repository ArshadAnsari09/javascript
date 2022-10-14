// console.log("Hello");

var bottle = 99;

function bottleLyrics(){
    while(bottle >= 1){
        if( bottle == 1){
            console.log(bottle + " bottles of beer on the wall " + bottle + " bottles of beer. " + "Take 1 down, pass it around, " + " no more bottle on beer on the wall." );
        }else{
        console.log(bottle + " bottles of beer on the wall " + bottle + " bottles of beer. " + "Take 1 down, pass it around, " + (bottle - 1) + " bottles on beer on the wall." );
        }
        bottle--;
    }
}

bottleLyrics();