function resetLights(){

    for(let i=1;i<=7;i++){

        document
        .getElementById("L"+i)
        .className="light off";

    }

}

function showLights(){

    resetLights();

    let day=parseInt(document.getElementById("day").value);

    let holiday=document.getElementById("holiday").checked;

    let evenPhase=(day%2==0);

    if(holiday){

        evenPhase=!evenPhase;

    }

    let onLights=[];

    if(evenPhase){

        onLights=[2,4,6];

    }
    else{

        onLights=[1,3,5,7];

    }

    for(let x of onLights){

        document
        .getElementById("L"+x)
        .className="light on";

    }

    document.getElementById("result").innerHTML=

    holiday?

    "Holiday Mode (Rule B Applied)"

    :

    "Normal Day";

}