var canvas = document.createElement('canvas')

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
var c = canvas.getContext('2d');
c.fillRect(100,100,100,100);
console.log(canvas)

function fingerprint() {
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    var txt = 'itu.dk';
    ctx.textBaseline = "top";
    ctx.font = "16px 'Arial'";
    ctx.textBaseline = "alphabetic";
    ctx.rotate(.15);
    ctx.fillStyle = "#f60";
    ctx.fillRect(30,0,-1,30);
    ctx.fillStyle = "#069";
    ctx.fillText(txt, 4, 15);
    ctx.fillStyle = "rgba(50, 200, 0, 0.5)";
    ctx.fillText(txt, 4, 17);
    ctx.shadowBlur=10;
    ctx.shadowColor="blue";
    ctx.fillRect(-20,10,70,5);
    var strng=canvas.toDataURL();

document.body.appendChild(canvas);    
    
    var hash=0;
    if (strng.length==0) return 'false';
    for (i = 0; i < strng.length; i++) {
		char = strng.charCodeAt(i);
		hash = ((hash<<5)-hash)+char;
		hash = hash & hash;
    }
    console.log(canvas);
	return hash;
}

$('#number').html(fingerprint());

