function search() {

    let storyToSearch = document.getElementById('searchbox').value;

    let stories = document.getElementsByClassName("story");

    for (let i = 0; i < stories.length; i++) {
        let storyText = stories[i].innerHTML.toLowerCase();
        if (storyText.includes(storyToSearch)) {
            stories[i].style.display = "block";
        } else {
            stories[i].style.display = "none";
        }
    }
}

function filter(query){
    document.getElementById('searchbox').value = query;
    search();
}