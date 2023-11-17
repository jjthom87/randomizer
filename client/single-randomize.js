let inputStart = 1;
let howManyTimesSubmitHit = 0;
let submitButtonHit = false;
let oneByOneOptions = [];

const runOneByOne = () => {
    let html = "<h3>Create Your List to Randomize</h3>";
    html += "<div id='inputs-div'><span class='input-spans' id='one-by-one-span-1'><input id='input-1' type='text'><button class='add-input-button' id='plus-minus-button-1'>+</button></span><br></div>"
    const div = document.createElement('div');
    div.setAttribute("id", "one-by-one-div");
    div.innerHTML = html

    let submitButton = document.createElement("button");
    submitButton.setAttribute("id", "submit-inputs-button");
    submitButton.textContent = "Randomize List";

    document.querySelector("#single-randomizer").appendChild(div).appendChild(submitButton)
}

document.querySelector("body").addEventListener("click", function(e){
    if(e.target.className == "add-input-button"){
        if(e.target.textContent == "+"){

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
                let html = "<input id='input-"+inputStart+"' type='text'><button class='add-input-button' id=plus-minus-button-"+inputStart+">+</button><br>"
                let span = document.createElement("span")
                span.setAttribute("id", "one-by-one-span-" + inputStart);
                span.setAttribute("class", "input-spans")
                span.innerHTML = html
        
                document.querySelector("#inputs-div").appendChild(span)
            } else {
                alert("No Duplicates or Blank")
            }
        } else if (e.target.textContent == "-"){
            howManyTimesSubmitHit = 0;

            const elementNum = e.target.id.split("plus-minus-button-")[1]
            let inputValue = document.querySelector(`#input-${elementNum}`).value;
            oneByOneOptions.splice(oneByOneOptions.indexOf(inputValue),1)

            const deletedSpan = document.getElementById(`one-by-one-span-${elementNum}`)
            document.querySelector(`#inputs-div`).removeChild(deletedSpan)
        }
    }

    if(e.target.id == "submit-inputs-button"){
        submitButtonHit = true;
        if(howManyTimesSubmitHit == 0){
            let previousInputValue = document.querySelector(`#input-${inputStart}`).value;
            oneByOneOptions.push(previousInputValue)

            howManyTimesSubmitHit++
        }

        let randomizeP = document.querySelector("#randomize-p");
        if(randomizeP != null){
            document.querySelector("#single-randomizer").removeChild(randomizeP)
        }

        let randomItem = oneByOneOptions[Math.floor(Math.random() * oneByOneOptions.length)]
        let p = document.createElement("p");
        p.setAttribute("id", "randomize-p")
        p.textContent = randomItem;

        document.querySelector("#single-randomizer").appendChild(p)
    }
})

document.querySelector("#input-mode").addEventListener("change", function(e){
    switch(e.target.value){
        case "one-by-one":
            runOneByOne();
            break;
        default:
            console.log("ya beat")
    }
})