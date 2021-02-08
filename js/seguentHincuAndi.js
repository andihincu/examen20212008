function passaSeguentAH(objRebut){
    let idObjPregAct = objRebut.parentElement.parentElement.id; 
    let colArticles = document.getElementsByTagName("article");
    let idObjPregSeg;
      for (let i = 0; i < colArticles.length; i++) {
      if(colArticles[i].id == idObjPregAct){
        idObjPregSeg = colArticles[i+1].id;
        break;
      };
    }
  
    amagaElementAH(idObjPregAct);
    mostraElementAH(idObjPregSeg);
  }
  
  
  function mostraElementAH(idRebut){
    document.getElementById(idRebut).classList.add("elementVisibleAH");
    document.getElementById(idRebut).classList.remove("elementOcultAH");
  }
  
  function amagaElementAH(idRebut){
    document.getElementById(idRebut).classList.remove("elementVisibleAH");
    document.getElementById(idRebut).classList.add("elementOcultAH");
  }