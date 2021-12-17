function teste1(num){
    if(num > 7)
      console.log(num)
      console.log('final')    //por não haver chaves, esta linha não esta associada ao IF.   
}

teste1(6)
teste1(8)

function teste2(num){
    if(num > 7); {     //por conta do ";" o bloco do IF foi ignorado por entender que o bloco seguinte não esta associado a ele
        console.log(num)
    }
}

teste2(6)
teste2(8) 