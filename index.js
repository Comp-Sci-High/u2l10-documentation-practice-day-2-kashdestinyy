// Exploring Space APIs
// In this assignment, you'll use four different APIs to practice fetching data
// and logging specific pieces of information to the console.

// -----------------------------------------------------
// TASK 1: People in Space API
// API: People in Space (Open Notify)
//
// 1. Create a function called fetchPeopleInSpace.
// 2. Look up the documentation for the "People in Space" API.
// 3. Write a fetch request to get a list of people currently in space.
// 4. Convert the response to JSON.
// 5. Log the full data to the console.
// 6. Then, log only the name of the 8th person listed in space.
// -----------------------------------------------------
// CALL IT

async function fetchPeopleInSpace(url){
    const response = await fetch(url)
    const data = await response.json
    console.log(data)
    console.log(data.people[7].name)
}
 let PISpace = "http://api.open-notify.org/astros.json"

 fetchPeopleInSpace(PISpace)

// -----------------------------------------------------
// TASK 2: NASA Astronomy Picture of the Day (APOD)
// API: NASA APOD
//
// 1. Create a function called fetchAPOD.
// 2. Read the documentation for the APOD API on api.nasa.gov.
// 3. Your query should include:
//    - your API key
//    - today's date (you can omit the date to get the latest photo)
// 4. Fetch the data and convert it to JSON.
// 5. Log only the image URL or video URL for today's Astronomy Picture of the Day.
// -----------------------------------------------------
// CALL IT

async function fetchAPOD(url) {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    console.log(data.url)
}

let pictureoftheDay = "https://api.nasa.gov/planetary/apod?date=2025-10-22"
fetchAPOD(pictureoftheDay)

// -----------------------------------------------------
// TASK 3: NASA Mars Rover Photos
// API: NASA Mars Rover Photos
//
// 1. Create a function called fetchMarsPhotos.
// 2. Read the documentation for the Mars Rover Photos API on api.nasa.gov.
// 3. Your query should include:
//    - the name of the rover (for example, Curiosity)
//    - a specific Earth date
//    - your API key
// 4. Fetch the data and convert it to JSON.
// 5. Log the total number of photos returned.
// 6. Then, log the camera name and image URL of the first photo in the list.
// -----------------------------------------------------
// CALL IT


async function fetching(url) {
    const response = await fetch(url)
    const data = response.json
    console.log(data)
    console.log(data.photos.length)
    console.log(data.photos[0].camera.full_name)
    
}

let mars = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2020-10-01&api_key='JCY1Cf3A8B90Ian4yOVqjfgLNsQXtZwyrUWuO5Cp'"
fetchMarsPhotos(mars)

// -----------------------------------------------------
// TASK 4: NASA Image and Video Library
// API: NASA Image and Video Library
//
// 1. Create a function called fetchNasaImage.
// 2. Read the documentation for the NASA Image and Video Library API.
// 3. Your query should include:
//    - a search keyword (for example, “Orion Nebula” or “Jupiter”)
//    - media type set to “image”
// 4. Fetch the data and convert it to JSON.
// 5. Log the total number of results found.
// 6. Then, log the title and image URL of the first result.
// -----------------------------------------------------
// CALL IT


async function fetchNasaImage(url) {
    const response = await fetch(url)
    const data = response.json
    console.log(data)
    console.log(data.collections.items.length)
    console.log(data.ietms[0].title.href)
    
}

let NasaImage = "https://images-api.nasa.gov/search2q='Orion Nebula'&media_type=image"
fetchNasaImage(NasaImage)


