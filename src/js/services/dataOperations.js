/**
 * Get all pokemons from server
 */
function getData(){
    return new Promise(function(resolve, reject){
        let xhttp = new XMLHttpRequest();            
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                resolve(JSON.parse(xhttp.responseText));
            }else if(this.readyState==4 && this.status!=200){
                reject(xhttp.responseText);
            }
        };
        xhttp.open("GET", "http://localhost:3000/items", true);
        xhttp.send();
    });
}


/**
 * Post the update data to server
 * @param {Object}
 */
function postData(obj){
    return new Promise(function(resolve, reject){
            let xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                setTimeout(()=>{resolve(xhttp.responseText);}  , 1000);
            }else if(this.readyState==4 && this.status!=200){
                setTimeout(()=>{reject("Cannot Update the pokemon right now. Please try again later");}  , 1000);
            }
        };
        xhttp.open("POST", "http://localhost:3000/update", true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        let data = Object.keys(obj).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(obj[key])).join('&');
        xhttp.send(data);
    });
}

export {getData, postData};