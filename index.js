let x='X'
let d=document.querySelector('.player')




tictactoe=(num)=>{
let a=document.querySelector('.r'+num)
if(a.innerHTML===''){
a.innerHTML=x
isWinner()
checksymbol()
d.innerHTML='Player '+x+` Turn's`
}
}






checksymbol=()=>{
    if(x==='X'){
        x='O'
    }else{
        x='X'
    }
}





getBox=(n)=>{
    return document.querySelector('.r'+n).innerHTML
}





checkbox=(a,b,c,z)=>{
    if(getBox(a)===z && getBox(b)===z && getBox(c)===z){
        return true
    }
    else{
        return false
    }
}





isWinner=()=>{


    if(checkbox(1,2,3,x) || checkbox(4,5,6,x) || checkbox(7,8,9,x) || checkbox(1,4,7,x) || checkbox(2,5,8,x) || checkbox(3,6,9,x) || checkbox(1,5,9,x) || checkbox(7,5,3,x)){
        
        d.innerHTML='Player '+x+' is Won!!!'
    reSet()

        throw `The End`
    }


    else{
        if(getBox(1)!="" && getBox(2)!="" && getBox(3)!="" &&
   getBox(4)!="" && getBox(5)!="" && getBox(6)!="" &&
   getBox(7)!="" && getBox(8)!="" && getBox(9)!=""){

    d.innerHTML= `It's Tie!!!`
        reSet()

       throw `It's Tie!!!`
   }
    }
   
}

reSet=()=>{
    
        for(let i=1;i<=9;i++){
            document.querySelector('.r'+i).innerHTML=''
        }
    
}
