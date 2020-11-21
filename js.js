function footToMeter(foot){
    foot=parseFloat(foot);
    document.getElementById('outputMeters').innerHTML= foot * 0.305;
}

function metersToFoot(meters) {
    meters=parseFloat(meters);
    document.getElementById('outputFeet').innerHTML= meters * 3.279;
}