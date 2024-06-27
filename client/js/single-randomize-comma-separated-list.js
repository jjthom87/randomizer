const createCommaSeparatedHeader = () => {
    let html = "<h3>Input Your Comma Separated List to Randomize</h3>";
    html += "<span style='font-size: 20px'><i>If an input contains a comma, please replace it with a ^ symbol</i></span><br><br>"
    html += "<textarea id='comma-separated-text-area' style='height: 150px;width: 400px;'></textarea>"
    const div = document.createElement('div');
    div.setAttribute("id", "comma-separated-text-area-div");
    div.innerHTML = html

    document.querySelector("#randomizer-div").appendChild(div)
}

const createCommaSeparatedRandomizeButton = () => {
    let submitButton = document.createElement("button");
    submitButton.setAttribute("id", "randomize-inputs-list-button-comma-separated");
    submitButton.classList.add("site-button");
    submitButton.textContent = "Randomize List";

    // let saveRandomizedListButton = document.createElement("button");
    // saveRandomizedListButton.setAttribute("id", "save-randomized-list-button");
    // saveRandomizedListButton.textContent = "Save Randomized List";

    document.querySelector("#randomizer-div").appendChild(submitButton)
    // document.querySelector("#randomizer-div").appendChild(saveRandomizedListButton);
    document.querySelector("#randomizer-div").appendChild(document.createElement("br"))
}

const commaSeparatedRandomizeInputsButtonClicked = () => {
    const commaSeparatedList = document.querySelector("#comma-separated-text-area").value.split(",");
    let randomItemFromList = commaSeparatedList[Math.floor(Math.random() * commaSeparatedList.length)]
    randomItemFromList = randomItemFromList.replaceAll("^", ",")

    if(document.querySelector("#randomize-p-comma-separated") == null){
        let p = document.createElement("p");
        p.setAttribute("id", "randomize-p-comma-separated")
        p.textContent = randomItemFromList;
        document.querySelector("#randomizer-div").appendChild(p)
    } else {
        document.querySelector("#randomize-p-comma-separated").textContent = randomItemFromList;
    }
}

const commaSeparatedClickEvents = (e) => {
    switch(e.target.id){
        case "randomize-inputs-list-button-comma-separated":
            commaSeparatedRandomizeInputsButtonClicked();
            break;
    }
}

const runCommaSeparated = () => {
    createCommaSeparatedHeader();
    createCommaSeparatedRandomizeButton();
}

document.querySelector("body").addEventListener("click", function(e){
    commaSeparatedClickEvents(e);
})

document.querySelector("#input-mode").addEventListener("change", function(e){
    if(e.target.value == "comma-separated-list"){
        document.querySelector("#randomizer-div").innerHTML = "";
        runCommaSeparated()
    }
})