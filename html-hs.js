let h1 = document.createElement("h1");
let texto_h1= document.createTextNode("en que hora sale el sol?");
h1.appendChild(texto_h1);

 let elbody= document.getElementById("elbody");
  elbody.appendChild(h1);

let cinata_blanca = [
    {
        "nombre":"Omar",
        "edad":24
    },
    {
        "nombre" : "Nora",
        "edad" :24
    },
    {
        "nombre" : "Jose",
        "edad" :14

    }
]
for(i=0;i<cinata_blanca.length;i++){
     let h1=$("<h1>"+"este es"+cinata_blanca[i].nombre+"y tiene"+cinata_blanca[i].edad+"años</h1>");
    $("#elbody").append(h1);
}