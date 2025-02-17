document.addEventListener('DOMContentLoaded', () => {
    let img = document.querySelector('.imagePersonal');
    
    if (img == true && img != undefined) {
        alert(img);
    } else {
        alert("Mi dispiace ma l'elemento img non esiste: ". img);
    }
});