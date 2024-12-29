
const worker = new Worker("worker.js");

const sumButton = document.querySelector("#sumButton");
const bgButton = document.querySelector("#bgButton");

sumButton.addEventListener("click", event => {
    // let sum = 0;
    // for (let i = 0; i <= 10000000000;i++)
    // {
    //     sum += i;
    // }
    // let inputnum = document.getElementById("inputnumber").value;
    // alert(`Sum is  ${sum * inputnum}`);
    let inputnum = document.getElementById("inputnumber").value;

    worker.postMessage(inputnum);

});

worker.onmessage = function(message)
{
    console.log(message)
}
bgButton.addEventListener("click", event=>{
    if (document.body.style.background != "green")
        document.body.style.background = "green";
    else
        document.body.style.background = "blue";
});