let inputStart = 1;
let howManyTimesSubmitHit = 0;
let submitButtonHit = false;
let oneByOneOptions = [];
let savedLists = [];

const createOneByOneHeader = () => {
    let html = "<h3>Create Your List to Randomize</h3>";
    html += "<div id='inputs-div'><span class='input-spans' id='one-by-one-span-1'><input id='input-1' type='text' class='one-by-one-inputs'><button class='add-input-button' id='plus-minus-button-1'>+</button></span><br></div>"
    if(document.querySelector("#one-by-one-div") != null){
        inputStart = 1;
        howManyTimesSubmitHit = 0;
        oneByOneOptions = [];
        if(document.querySelector("#randomize-p") != null){
            document.querySelector("#randomize-p").textContent = ""
        }
        document.querySelector("#one-by-one-div").innerHTML = html;
    } else {
        const div = document.createElement('div');
        div.setAttribute("id", "one-by-one-div");
        div.innerHTML = html
    
        document.querySelector("#randomizer-div").appendChild(div)    
    }
}

const createOneByOneRandomizeButton = () => {
    let submitButton = document.createElement("button");
    submitButton.setAttribute("id", "randomize-inputs-list-button");
    submitButton.classList.add("site-button");
    submitButton.textContent = "Randomize List";
    submitButton.style.marginTop = "5px"

    let saveRandomizedListButton = document.createElement("button");
    saveRandomizedListButton.setAttribute("id", "save-randomized-list-button");
    saveRandomizedListButton.classList.add("site-button");
    saveRandomizedListButton.textContent = "Save Randomized List";
    saveRandomizedListButton.style.marginTop = "5px"

    document.querySelector("#randomizer-div").appendChild(submitButton)
    document.querySelector("#randomizer-div").appendChild(saveRandomizedListButton);
    document.querySelector("#randomizer-div").appendChild(document.createElement("br"))
}

const oneByOnePlusButtonClicked = () => {
    howManyTimesSubmitHit = 0;

    let previousInputValue = document.querySelector(`#input-${inputStart}`).value;

    if(submitButtonHit){
        submitButtonHit = false
        oneByOneOptions.splice(oneByOneOptions.indexOf(previousInputValue),1)
    }

    if((oneByOneOptions.length > 0 || !oneByOneOptions.includes(previousInputValue)) && previousInputValue !== ""){
        oneByOneOptions.push(previousInputValue)
        document.querySelector(`#plus-minus-button-${inputStart}`).innerHTML = "-"
        
        inputStart++
        let html = "<input id='input-"+inputStart+"' type='text' class='one-by-one-inputs'><button class='add-input-button' id=plus-minus-button-"+inputStart+">+</button><br>"
        let span = document.createElement("span")
        span.setAttribute("id", "one-by-one-span-" + inputStart);
        span.setAttribute("class", "input-spans")
        span.innerHTML = html

        document.querySelector("#inputs-div").appendChild(span)
    } else {
        alert("No Duplicates or Blank")
    }
}

const oneByOneMinusButtonClicked = () => {
    howManyTimesSubmitHit = 0;

    const elementNum = e.target.id.split("plus-minus-button-")[1]
    let inputValue = document.querySelector(`#input-${elementNum}`).value;
    oneByOneOptions.splice(oneByOneOptions.indexOf(inputValue),1)

    const deletedSpan = document.getElementById(`one-by-one-span-${elementNum}`)
    document.querySelector(`#inputs-div`).removeChild(deletedSpan)
}

const oneByOneRandomizeInputsButtonClicked = () => {
    submitButtonHit = true;
    if(howManyTimesSubmitHit == 0){
        let previousInputValue = document.querySelector(`#input-${inputStart}`).value;
        oneByOneOptions.push(previousInputValue)

        howManyTimesSubmitHit++
    }

    let randomizeP = document.querySelector("#randomize-p");
    if(randomizeP != null){
        document.querySelector("#randomizer-div").removeChild(randomizeP)
    }

    let randomItem = oneByOneOptions[Math.floor(Math.random() * oneByOneOptions.length)]

    if(document.querySelector("#randomize-p") == null){
        let p = document.createElement("p");
        p.setAttribute("id", "randomize-p")
        p.textContent = randomItem;
        document.querySelector("#randomizer-div").appendChild(p)
    } else {
        document.querySelector("#randomize-p").textContent = randomItem;
    }
}

const oneByOneSaveRandomizedListButtonClicked = () => {
    let previousInputValue = document.querySelector(`#input-${inputStart}`).value;
    oneByOneOptions.push(previousInputValue)

    const randomizedListTitle = document.querySelector("#set-randomized-list-title-input").value;

    const randomizedItem = {
        title: randomizedListTitle,
        list: oneByOneOptions
    }
    savedLists.push(randomizedItem)

    if(document.querySelector("#saved-randomizers") == null){
        const savedRandomItemsDiv = document.createElement("div");
        savedRandomItemsDiv.setAttribute("id", "saved-randomizers");
        savedRandomItemsDiv.style.display = "flex";
        document.querySelector("#randomizer-div").appendChild(savedRandomItemsDiv);
    }

    const newSavedRandomizedList = document.createElement("span");
    const div = document.createElement("div");
    div.style.backgroundColor = "grey";
    div.style.width = "fit-content";
    div.style.paddingTop = "0px";
    div.style.paddingRight = "5px";
    div.style.paddingBottom = "3px";
    div.style.paddingLeft = "5px";
    div.style.margin = "5px";
    div.setAttribute("id", randomizedListTitle.split(' ').join('-').toLowerCase() + "-list-section")
    div.innerHTML = "<h3>"+randomizedListTitle+"</h3><button class='saved-randomized-button' id='randomize-"+randomizedListTitle.split(' ').join('-').toLowerCase()+"-list-button'>Randomize</button>";
    newSavedRandomizedList.appendChild(div);
    document.querySelector("#saved-randomizers").appendChild(newSavedRandomizedList);

    document.querySelector("#set-randomized-list-title-input").value = "";
    createOneByOneHeader();
}

const oneByOneSavedRandomizedButtonClicked = (e) => {
    const selectedList = savedLists.find((savedList) => {
        return e.target.id.includes(savedList.title.split(' ').join('-').toLowerCase())
    })
    let randomP;
    if(document.querySelector("#" + selectedList.title.split(' ').join('-').toLowerCase() + "-list-random-item") != null){
        document.querySelector("#" + selectedList.title.split(' ').join('-').toLowerCase() + "-list-random-item").innerHTML = "";
        randomP = document.querySelector("#" + selectedList.title.split(' ').join('-').toLowerCase() + "-list-random-item");
    } else {
        randomP = document.createElement("p");
        randomP.setAttribute("id", selectedList.title.split(' ').join('-').toLowerCase() + "-list-random-item");
    }
    randomP.textContent = selectedList.list[Math.floor(Math.random() * selectedList.list.length)];
    document.querySelector("#" + selectedList.title.split(' ').join('-').toLowerCase() + "-list-section").appendChild(randomP);
}

const oneByOneClickEvents = (e) => {
    switch(e.target.className){
        case "add-input-button":
            switch(e.target.textContent){
                case "+":
                    oneByOnePlusButtonClicked();
                    break;
                case "-":
                    oneByOneMinusButtonClicked();
                    break;
            }
            break;
        case "saved-randomized-button":
            oneByOneSavedRandomizedButtonClicked(e);
            break;
    }

    switch(e.target.id){
        case "randomize-inputs-list-button":
            oneByOneRandomizeInputsButtonClicked();
            break;
        case "save-randomized-list-title":
            oneByOneSaveRandomizedListButtonClicked();
            break;
    }
}

const runOneByOne = () => {
    createOneByOneHeader();
    createOneByOneRandomizeButton();
}

document.querySelector("body").addEventListener("click", function(e){
    oneByOneClickEvents(e);
})

document.querySelector("#input-mode").addEventListener("change", function(e){
    if(e.target.value == "one-by-one"){
        document.querySelector("#randomizer-div").innerHTML = "";
        runOneByOne();
    }
})