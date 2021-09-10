

// Statisk tekst som brukes til å søke i
const text =
  'Baby cliche unicorn brooklyn farm-to-table. Salvia semiotics hella literally paleo humblebrag bushwick letterpress messenger bag pork belly brooklyn authentic vexillologist. Gastropub sustainable banjo, shaman snackwave viral air plant ramps health goth. Edison bulb vegan microdosing, tote bag unicorn skateboard disrupt copper mug four loko sustainable whatever cloud bread slow-carb lumbersexual four dollar toast. Waistcoat lomo hammock vape shabby chic sartorial yr godard pok pok fashion axe organic migas. Quinoa yr vexillologist intelligentsia verylongwordthatislong neutra mixtape YOLO XOXO listicle letterpress farm-to-table beard.';

const longestWord = () => {

//lager en array med ord fra text, men splitter den på mellom 
  const nyArrayMedOrd = text.split(" ");
//setter lengsteordet til å være det første ordet i arrayen (som er baby) 
  let lengsteOrdet = nyArrayMedOrd[0];
//går gjennom arrayen fra første ord til lengden av arrayen
  for (let i = 0; i < nyArrayMedOrd.length; i++) {
      //sammeligner det ordet vi er på nå, med det lengste ordet vi startet med
    if(nyArrayMedOrd[i].length > lengsteOrdet.length){
      //hvis ordet var lengre enn det vi hadde, bytt til det nye ordet som er lengre
      lengsteOrdet = nyArrayMedOrd[i];
    };  
  }
return lengsteOrdet;
  

};
 console.log(longestWord());

