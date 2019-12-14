export function mergesort(array){
    const barsAnimation =[];
    if(array.length <=1) return array;
    const auxArray = array.slice();
    mergeHelper(array,0,array.length-1,auxArray,barsAnimation);
    getAnimation(barsAnimation);
}

function mergeHelper(
    mainArray,
    sidx,
    eidx,
    auxArray,
    barsAnimation,
  ) {
    if (sidx === eidx) return;
    const mididx = Math.floor((sidx + eidx) / 2);
    mergeHelper(auxArray, sidx,mididx, mainArray, barsAnimation);
    mergeHelper(auxArray,mididx + 1, eidx, mainArray, barsAnimation);
    doMerge (mainArray, sidx, mididx, eidx, auxArray, barsAnimation);
  }

function doMerge(mainArray, sidx, mididx, eidx, auxArray, barsAnimation)
    {
        let k = sidx;
        let i = sidx;
        let j = mididx + 1;
        while (i <= mididx && j <= eidx) {
          
          barsAnimation.push([i, j]);
          
          barsAnimation.push([i, j]);
          if (auxArray[i] <= auxArray[j]) {
          
            barsAnimation.push([k, auxArray[i]]);
            mainArray[k++] = auxArray[i++];
          } else {
           
            barsAnimation.push([k, auxArray[j]]);
            mainArray[k++] = auxArray[j++];
          }
        }
        while (i <= mididx) {
          
          barsAnimation.push([i, i]);
          
          barsAnimation.push([i, i]);
         
          barsAnimation.push([k, auxArray[i]]);
          mainArray[k++] = auxArray[i++];
        }
        while (j <= eidx) {
          
          barsAnimation.push([j, j]);
         
          barsAnimation.push([j, j]);
          
          barsAnimation.push([k, auxArray[j]]);
          mainArray[k++] = auxArray[j++];
        }
      }
      function getAnimation(animations){
      const arrayBars = document.getElementsByClassName('array-bar');
      for (let i = 0; i < animations.length; i++) {
        
        const isColorChange = i % 3 !== 2;
        if (isColorChange) {
          const [barOneIdx, barTwoIdx] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          const color = i % 3 === 0 ? 'red' : 'green';
          setTimeout(() => {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
          }, i*3 );
        } else {
          setTimeout(() => {
            const [barOneIdx, newHeight] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            barOneStyle.height = `${newHeight}px`;
          }, i*3);
        }
      }
    }