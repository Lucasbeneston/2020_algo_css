const prenoms = ["Thomas", "Sarah", "Alexandre","Alexandre",, "Mélodie", "Jonathan", "Laure"];

for (let i = 0; i < prenoms.length; i++) {
    console.log(prenoms[i]);
}


function supprimerDoublons(prenoms) {
    let unique = {};
    prenoms.forEach(function(i) {
      if(!unique[i]) {
        unique[i] = true;
      }
    });
    return Object.keys(unique);
  }
  let uniquePrenons = supprimerDoublons(prenoms)
  console.log(uniquePrenons);

  