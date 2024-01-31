let list : Array<number> = [];
let numberInput : HTMLInputElement = document.getElementById("numberInput") as HTMLInputElement;
let numberAppendButton : HTMLButtonElement = document.getElementById("numberAppend") as HTMLButtonElement;
let results : HTMLDivElement = document.getElementById("results") as HTMLDivElement;
let maximum : HTMLParagraphElement = document.getElementById("maximum") as HTMLParagraphElement;
let getMaximumButton : HTMLButtonElement = document.getElementById("getMaximum") as HTMLButtonElement;

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

getMaximumButton.addEventListener("click", 
function()
{
  let max : number = GetMaximum(list);
  maximum.innerHTML = max.toString();
})

function AddNumberToList(number : number, list : Array<number>) : void
{
  list.push(number);
}

function GetMaximum(list : Array<number>) : number
{
  let max : number = list[0];
  for (let i : number = 1; i < list.length; i++)
  {
    if (list[i] > max)
    {
      max = list[i];
    }
  }
  return max;
}