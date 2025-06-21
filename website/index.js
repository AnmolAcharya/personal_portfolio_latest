const counter = document.querySelector(".visitor-counter");

async function updateCounter() {
    try {
        let response = await fetch("https://5p0kww6arc.execute-api.us-east-2.amazonaws.com/prod/views");
        let data = await response.json();
        counter.innerText = `Views: ${data.views}`;  // FIXED - updated check
        console.log("Visitor count data:", data);
    } catch (err) {
        console.error("Error fetching view count:", err);
    }
}

updateCounter();


// //javascript -> viewer count 

// const counter = document.querySelector(".visitor-counter")
// async function updateCounter() {

//     let response = await fetch("https://5p0kww6arc.execute-api.us-east-2.amazonaws.com/prod/views")

//     // let response = await fetch("https://laz4wny3pofyxedshbo4v5pnby0edape.lambda-url.us-east-2.on.aws/")
//     let data = await response.json()

//     counter.innerHTML = ` Views: ${data}`
//     console.log("Visitor count data:", data);

    
// }

// updateCounter()