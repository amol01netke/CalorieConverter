let input=document.getElementById('input-calories');
input.addEventListener('input',function (e) {
    let calories=e.target.value;
    let protein=document.getElementById('protein');
    let carbohydrates=document.getElementById('carbohydrates');
    let fats=document.getElementById('fats');

    protein.innerHTML=calories/4+" gm";
    carbohydrates.innerHTML=calories/4+" gm";
    fats.innerHTML=calories/9+" gm";
}); 