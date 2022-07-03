var cp_1 = document.getElementById("CP1-ht");
var cp_2 = document.getElementById("CP2-ht");
var cp_3 = document.getElementById("CP3-ht");
var resp = document.getElementById('resp-p');

var sprint1 = document.getElementById("sptint1-ht")
var sprint2 = document.getElementById("sptint2-ht")

var gs_1 = document.getElementById("GS-ht")

var cond = true


var btn = document.querySelector("#refresh");



function calcular() {

    var cp1 = Number(cp_1.value)
    var cp2 = Number(cp_2.value)
    var cp3 = Number(cp_3.value)

    var sp1 = Number(sprint1.value)
    var sp2 = Number(sprint2.value)

    var gs = Number(gs_1.value)



    resp.innerHTML = '';

    calculo()

    function calculo(cond = false) {


        if (cp1 >= 0 && cp1 < 11) {
            if (cp2 >= 0 && cp2 < 11) {
                if (cp2 >= 0 && cp2 < 11) {
                    var cps = [cp1, cp2, cp3]

                    function comparaNumeros(a, b) {
                        if (a == b) return 0;
                        if (a < b) return -1;
                        if (a > b) return 1;
                    }

                    console.log(`Valores em ordem crescente é ${cps.sort(comparaNumeros)} soma = ${cps[1] + cps[2]}`)
                    var somCp = cps[1] + cps[2]

                    if (sp1 >= 0 && sp1 < 11) {
                        if (sp1 >= 0 && sp1 < 11) {
                            var somSp = sp1 + sp2

                            var somPart1 = somCp + somSp

                            var part1 = (somPart1 / 4) * 0.4

                            if (gs >= 0 && gs < 11) {

                                var part2 = gs * 0.6

                                var somaTotal = (part1 + part2) * 10


                                resp.innerHTML += `<br> Média = ${somaTotal.toFixed(1)}`

                            } else {
                                window.alert("A nota da prova semestral não está nos padrões, digite um valor entre 0 a 10");

                            }

                        } else {
                            window.alert("A nota do Sprint 2 não está nos padrões, digite um valor entre 0 a 10");

                        }

                    } else {
                        window.alert("A nota do Sprint 1 não está nos padrões, digite um valor entre 0 a 10");

                    }

                } else {
                    window.alert("A nota do Check Point 3 não está nos padrões, digite um valor entre 0 a  10");

                }

            } else {
                window.alert("A nota do Check Point 2 não está nos padrões, digite um valor entre 0 a 10");

            }

        } else {
            window.alert("A nota do Check Point 1 não está nos padrões, digite um valor entre 0 a 10");

        }





        /*
         var cps = [cp1, cp2, cp3]

         function comparaNumeros(a, b) {
             if (a == b) return 0;
             if (a < b) return -1;
             if (a > b) return 1;
         }

         console.log(`Valores em ordem crescente é ${cps.sort(comparaNumeros)} soma = ${cps[1] + cps[2]}`)
         var somCp = cps[1] + cps[2]



         var somSp = sp1 + sp2

         var somPart1 = somCp + somSp

         var part1 = (somPart1 / 4) * 0.4

         var part2 = gs * 0.6

         var somaTotal = (part1 + part2) * 10


         resp.innerHTML += `<br> soma = ${somaTotal.toFixed(1)}`*/

    }

}

btn.addEventListener("click", function () {

    location.reload();
});