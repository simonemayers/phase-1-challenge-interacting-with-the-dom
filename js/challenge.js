let counter = document.querySelector("#counter")
// let counterNum = parseInt(counter.innerHTML)

//Enable buttons 
function enableButtons(){
    document.querySelector("#plus").disabled = false
    document.querySelector("#minus").disabled = false
    document.querySelector("#heart").disabled = false
    document.querySelector("#submit").disabled = false
}

//disable buttons
function disableButtons(){
    document.querySelector("#plus").disabled = true
    document.querySelector("#minus").disabled = true
    document.querySelector("#heart").disabled = true
    document.querySelector("#submit").disabled = true
}

// Start counting
function startCounter(){
    enableButtons()
    return current = setInterval(() => counter.innerText++, 1000)
}
startCounter()

// Pause & Resume counting
function stopCounter(){clearInterval(current)}
document.querySelector("#pause").addEventListener("click", () => {
    if(document.querySelector("#plus").disabled){
        startCounter()
    } else {
        document.querySelector("#pause").textContent = "resume"
        disableButtons()
        stopCounter()

    }
})

//Add counter
function addCounter(){
    let num = parseInt(counter.innerText) + 1
    return counter.innerText = num
    
}
document.querySelector("#plus").addEventListener("click", () => {
    stopCounter()
    addCounter()
    startCounter()
})

//Subtract counter 
function minusCounter(){
    let num = parseInt(counter.innerText) -1 
    return  counter.innerText = num
}
document.querySelector("#minus").addEventListener("click", () => {
    stopCounter()
    minusCounter()
    startCounter()
})

//Like a number
let num = 1
function createLike(){
    let times = ""
    let likes =  Array.from(document.querySelector(".likes").childNodes)
    let currentLi = document.querySelector(`[data-num = "${counter.innerText}"]`)
    if(document.querySelector(".likes li")){
        if(likes.includes(currentLi)){
            num += 1 
            times = "s"
            document.querySelector(`[data-num = "${counter.innerText}"]`).innerText = `${counter.innerText} has been like ${num} time${times}`
        } else{
            num = 1
            document.querySelector(".likes").appendChild(document.createElement("li")).dataset.num = counter.innerText
            document.querySelector(`[data-num = "${counter.innerText}"]`).innerText = `${counter.innerText} has been like ${num} time${times}`
        }
    }else {
        document.querySelector(".likes").appendChild(document.createElement("li")).dataset.num = counter.innerText
        document.querySelector(`[data-num = "${counter.innerText}"]`).innerText = `${counter.innerText} has been like ${num} time${times}`
    }
}
document.querySelector("#heart").addEventListener("click", createLike)

//Add a comment 
function addComment(){
    document.querySelector("#list").appendChild(document.createElement("p")).textContent = document.querySelector("#comment-form input").value
}

document.querySelector("#submit").addEventListener("click", (e) => {
    e.preventDefault()
    addComment()
    document.querySelector("#comment-form input").value = ""
})
