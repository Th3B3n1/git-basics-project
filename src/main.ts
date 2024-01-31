let list : Array<Number> = [];
let numberInput : HTMLInputElement = document.getElementById("numberInput") as HTMLInputElement;
let numberAppendButton : HTMLButtonElement = document.getElementById("numberAppend") as HTMLButtonElement;

numberAppendButton.addEventListener("click", 
function() 
{
  try
  {
    AddNumberToList(parseInt(numberInput.value), list);
  }
  catch (error)
  {
    console.error(error);
  }
})

function AddNumberToList(number : number, list : Array<Number>) : void
{
  list.push(number);
  console.log(list)
}