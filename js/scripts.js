
var tab = function(){
    var tabela = document.createElement("table");
    var x = document.getElementById("linhas").value;
    var y = document.getElementById("colunas").value;
    document.body.appendChild(tabela);

    for(var cont = 1; cont <= x; cont++){

        var trx = document.createElement("tr");
        tabela.appendChild(trx);


        for(var cont2 = 1; cont2 <= y; cont2++){

            var tdy = document.createElement("td");
            var txt = document.createTextNode("Linha" + " " + cont + ", Coluna" + " " + cont2);
            trx.appendChild(tdy);
            tdy.appendChild(txt);

        }

    }

}   