// 1,2- inserire i chilometri e l'eta
let kilometres = parseInt(prompt("Inserire i chilometri da percorere"));
let age = parseInt(prompt("Inserire l'età"));
// 3- calcolo del prezzo del biglietto con le dovute le regole:
    // 3.1 applicare il prezzo in base ai chilometri da percorrere (0.21 € al km)
    let price_ticket = kilometres * 0.21;
    let diff_discount;
    // 3.2- applicare lo sconto in base all'età
    if (age < 18){ 
        // minorenni 20%
        let discount_underage = price_ticket * 0.2;
        diff_discount = price_ticket - discount_underage;
        price_ticket = Number(diff_discount).toFixed(2);
    }
    else if (age > 17 && age < 66){
        // tra 18 e 65 nessun sconto 
        price_ticket; 
    }
    else{
        // over 65 di 40%
        let discount_over65 = price_ticket * 0.4;
        diff_discount = price_ticket - discount_over65
        price_ticket = Number(diff_discount).toFixed(2);
    }
// 4- visualizza in forma umana 
document.getElementById("ticket"). innerHTML = price_ticket + '€'
