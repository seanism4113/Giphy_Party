console.log("Let's get this party started!");
const giphyDiv = document.querySelector('.gifContainer');

async function getGiphy(searchTerm) {
    const key = "iuyoCMYiAsSxutlO90FAICVX38mQ2YX8"
    const res = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${searchTerm}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`,);
    for (giph of res.data.data){
        if (giph.title.toLowerCase().indexOf(searchTerm) !== -1 && searchTerm !== ""){
            createGiphy(giph.images.original.url);
            return;
        }
    }
}

function createGiphy(image){
    console.log(giphyDiv);
    const newGiphy = document.createElement('img');
    newGiphy.src=image;
    giphyDiv.append(newGiphy);
}

const input = document.querySelector('#giphySearch');


const searchbutton = document.querySelector('#searchButton').addEventListener('click', function(e){
    e.preventDefault();
    getGiphy(input.value.toLowerCase());
    input.value = "";
});

const removeButton = document.querySelector('#removeButton').addEventListener('click', function(e){
    e.preventDefault;
    giphyDiv.innerHTML = "";
});