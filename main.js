function berechnen(){
    let NB =document.getElementById("NettozuBrutto")
    let BN =document.getElementById("BruttozuNetto")
    let Eingabe = Number(document.getElementById("Eingabe").value)
    let pro = document.getElementById("mwst19").checked ? 19 / 100 : 7 / 100 ;
    let mwst7 = document.getElementById("mwst7")
    let mwst;
    let result;
    if (NB.checked) {
        mwst = Eingabe * pro;
        console.log(mwst)
        result = Eingabe + mwst
        console.log(result);
        document.querySelector("#Mehwertsteuer").innerHTML = mwst.toFixed(1)
        document.querySelector("#Bruttobetrag").innerHTML = result
    } 
    else {
        mwst = Eingabe * pro;
        console.log(mwst)
        result = Eingabe - mwst;
        console.log(result);
        document.querySelector("#Mehwertsteuer").innerHTML = mwst.toFixed(1) 
        document.querySelector("#Bruttobetrag").innerHTML = result
    }

}