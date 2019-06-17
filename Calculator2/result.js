function returnRes(){
    const x = sessionStorage.getItem('result');
    document.getElementById("res").value = x;
}