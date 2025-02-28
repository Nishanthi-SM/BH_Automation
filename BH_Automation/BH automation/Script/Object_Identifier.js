﻿
// ************************************************************************************************************************************
// Function Name  : GetObject
// Description    :
// Arguments      : objParent - the parent window name
//                : intExitCounter - number of times the loop runs to wait for search object
// ************************************************************************************************************************************

function GetObject(objParent,OR_Object, intExitCounter = 5){

  try
  {
    let ParentCounter = 0;
    do
    {
      ParentCounter = ParentCounter+1
      if (ParentCounter > 2) {
      Delay(1000,"Waiting for ParentObject");  
    }
    break;

    }

    while (!objParent.Exists || ParentCounter> 10);
    let Counter = 0;
    do
    {
      Counter = Counter+1;
      var tempUIObject = {};
      let tempArray = OR_Object.split("^");  
      // When object is defiened with Prop name and value this code is executed.
    
      {
        let PropArray = tempArray[0].split(",")
        let PropValue = tempArray[1].split(",")
        CurrentObject = objParent.FindChild(PropArray,PropValue,5000);
      }
      
      // Delay and wait for object to appear
      if (Counter > 2) {
        Delay(1000,"Waiting for Object") 
      }

    }

    while ( (!CurrentObject.Exists) && (Counter < intExitCounter));
    return CurrentObject
  }

  catch (e)
  {
    Log.Warning(e.message)

  }
}

// ************************************************************************************************************************************
// Function Name  : SetDefaultParent
// Description    : Return object that represents any generic page level object.
// Parameter      : strPage - the requird page URL to be passed
//                    
//                  
// ************************************************************************************************************************************

function SetDefaultParent(strPage) {
  
  // Intialize page object
  let objPage = Sys.Process("chrome").WaitPage(strPage);
  objPage.Wait(10000);
  return objPage;

}


