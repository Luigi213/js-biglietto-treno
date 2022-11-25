// 1,2- inserire i chilometri e l'eta
let kilometres = parseInt(prompt("Inserire i chilometri da percorere"));
let age = parseInt(prompt("Inserire l'età"));
// 3- calcolo del prezzo del biglietto con le dovute le regole:
    // 3.1 applicare il prezzo in base ai chilometri da percorrere (0.21 € al km)
    let price_ticket = kilometres * 0.21;
    // 3.2- applicare lo sconto in base all'età
    if (age < 18){ 
        // 3.2.1- minorenni 20%
        let discount_underage = price_ticket * 0.8;
        price_ticket = discount_underage;
    }
    else if (age > 17 && age < 66){
        price_ticket; 
    }
    else{
        // 3.2.1- over 65 di 40%
        let discount_over65 = price_ticket * 0.6;
        price_ticket = discount_over65;
    }
// 4- visualizza in forma umana 
document.getElementById("ticket"). innerHTML = price_ticket + '€'
