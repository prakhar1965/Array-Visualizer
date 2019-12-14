const arrayBars = document.getElementsByClassName('array-bar');
export function selectionsort(array){
    const animation = [];
    for(let i=0;i<array.length;i++){
        let min =i;
        for(let j=i+1;j<array.length;j++){
            animation.push([i,j,false,0]);
            animation.push([i,j,false,1]);
            if(array[j]<array[min])
            min = j;
        }
        animation.push([i,array[min],true]);
        animation.push([min,array[i],true]);
        let temp = array[i];
        array[i] = array[min];
        array[min] = temp;
           animation.push([i,0,false,2]);
    }
    getAnimation(animation);

}
function getAnimation(anim){
    
    for(let i=0;i<anim.length;i++){
       const [a,b,colorChange,x] = anim[i];
       if(!colorChange){
           const barOneStyle = arrayBars[a].style;
           const barTwoStyle = arrayBars[b].style;
           if(x!==2){
           const color = x===0 ? 'red' : 'purple';
           setTimeout(() => {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
          }, i*1 );}
          else
          {setTimeout(() => {
            barOneStyle.backgroundColor = 'green';
        
          }, i*1 );} }
       
       else{
           const barOneStyle = arrayBars[a].style;
           setTimeout(() => {
            barOneStyle.height = `${b}px`;
          }, i*1);

       }
    }
}