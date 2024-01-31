let list : Array<Number> = [];
let numberInput : HTMLInputElement = document.getElementById("numberInput") as HTMLInputElement;
let numberAppendButton : HTMLButtonElement = document.getElementById("numberAppend") as HTMLButtonElement;
let results : HTMLDivElement = document.getElementById("results") as HTMLDivElement;

numberAppendButton.addEventListener("click", 
function() 
{
  try
  {
    AddNumberToList(parseInt(numberInput.value), list);
    let label : HTMLParagraphElement = document.createElement("p");
    label.innerHTML = numberInput.value;
    results.appendChild(label);
  }
  catch (error)
  {
    console.error(error);
  }
})

function AddNumberToList(number : number, list : Array<Number>) : void
{
  list.push(number);
}