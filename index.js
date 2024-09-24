// Code your solution in this file
function distanceFromHqInBlocks(someValue) {
    //returns the number of blocks given a value
    if (someValue>42){
        return(someValue-42)
    }else{
        return(42-someValue)
    }
  }
function distanceFromHqInFeet(someValue) {
    distanceFromHqInBlocks(someValue);
    //call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    //passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks

    //the return value of distanceFromHq can then be used to calculate feet
    return distanceFromHqInBlocks(someValue)*264;
}

function distanceTravelledInFeet(start, destination) {
  //returns the number of feet travelled
    if(destination>start){
        return(destination-start)*264;
    }else{
        return(start-destination)*264;
    }
}
function calculatesFarePrice(start, destination) {

 let distance=distanceTravelledInFeet(start, destination);
 if(distance<400){
    return 0;
 }else if(distance>400 && distance<2000){
    return(distance-400)*0.02;
 }else if(distance>2000 && distance<2500){
    return 25;
 }else{
    return 'cannot travel that far';
    
 }

}














