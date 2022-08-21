var b = document.querySelector('button');
var cells = document.querySelectorAll('td');
function clearcells(){
  for(cell of cells){
    cell.textContent=''
  }
}
b.addEventListener('click',clearcells);
function changContent(){
  if(this.textContent==='x')
  {
    this.textContent='o';
  }else if(this.textContent=='o')
  {
    this.textContent=' ';
  }else{
    this.textContent='x';
  }
}




for(cell of cells){
  cell.addEventListener('click',changContent);
}
