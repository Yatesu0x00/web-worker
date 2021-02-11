if(typeof(w) == "undefined")
{
    var worker = new Worker('worker.js'); 
}

onmessage = function(e) {
    // Berechnungen auf der Grundlage des Inputs e.data
    var result = e.data;
    result++;
    postMessage(result);
}

onerror = function(e) {
console.log('ERROR (' + e.filename + ':' + e.lineno + '): ' + e.message);
}