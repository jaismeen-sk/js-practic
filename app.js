// let storecurrenthour=2;
// const getStoreStatus=(hour)=>{
//     if (hour >=9 && hour <18){
//         return"open for business";
//     }else{
//         return "sjshfshdfdhhsd";

//         }

//     };

// const dynamicMessage=getStoreStatus(storecurrenthour);
// console.log(dynamicMessage);


// const videoList=[
//     {title: "javascript" ,views: 1000, likes: 200, dislikes: 50 ,category:"coding"},
//     {title: "python" ,views: 1000, likes: 200, dislikes: 50 ,category:"entertainmet"},
//     {title: "c#" ,views: 1000, likes: 200, dislikes: 50 ,category:"coding"},
// ];


// // .filter
// const codingVideos=videoList.filter(video=>video.category==="coding");
// console.log(codingVideos);


// // .map
// const VideosTitle=videoList.map(video=>video.title);
// console.log(VideosTitle);



// 1. Grab references to the HTML elements using their IDs
const pageTitle = document.getElementById("main title");
const actionButton = document.getElementById("action btn");
const listContainer = document.getElementById("video list");

// 2. Data array representing web items
const tutorials = ["Learn HTML", "Master CSS", "Crush JavaScript"];

// 3. Event Listener: Make the button listen for a user click
actionButton.addEventListener("click", () => {
    
    // Change the text content of the heading element
    pageTitle.innerText = "Welcome to the JS Sprint Dashboard!";
    
    // Clear out the container list first to avoid duplicates
    listContainer.innerHTML = "";

    // Map through our data array and inject pure HTML straight into the browser DOM
    tutorials.forEach(item => {
        listContainer.innerHTML += `<li>🚀 ${item}</li>`;
    });
    
    console.log("DOM elements successfully updated!");
});