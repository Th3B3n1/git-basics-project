let list : Array<number> = [];
let numberInput : HTMLInputElement = document.getElementById("numberInput") as HTMLInputElement;
let numberAppendButton : HTMLButtonElement = document.getElementById("numberAppend") as HTMLButtonElement;
let results : HTMLDivElement = document.getElementById("results") as HTMLDivElement;
let minimum : HTMLParagraphElement = document.getElementById("minimum") as HTMLParagraphElement;
let getMinimumButton : HTMLButtonElement = document.getElementById("getMinimum") as HTMLButtonElement;

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

getMinimumButton.addEventListener("click", 
function()
{
  let min : number = GetMinimum(list);
  minimum.innerHTML = min.toString();
})

function AddNumberToList(number : number, list : Array<number>) : void
{
  list.push(number);
}

function GetMinimum(list : Array<number>) : number
{
  let min : number = list[0];
  for (let i : number = 1; i < list.length; i++)
  {
    if (list[i] < min)
    {
      min = list[i];
    }
  }
  return min;
}