
var coords=new Array(),
	gradient=new Array(),
	hash=window.location.hash.substr(1);

coords["1"]=[2,1];
coords["!"]=coords["1"];

coords["2"]=[87,1];
coords['"']=coords["2"];

coords["3"]=[173,1];
coords["§"]=coords["3"];

coords["4"]=[278,1];
coords["$"]=coords["4"];

coords["5"]=[343,1];
coords["%"]=coords["5"];

coords["6"]=[428,1];
coords["&"]=coords["6"];

coords["7"]=[513,1];
coords["/"]=coords["7"];

coords["8"]=[598,1];
coords["("]=coords["8"];

coords["9"]=[683,1];
coords[")"]=coords["9"];

coords["0"]=[768,1];
coords["="]=coords["6"];

coords["ß"]=[854,1];
coords["?"]=[854,1];
coords["q"]=[51,86];
coords["w"]=[135,86];

coords["´"]=[940,1];
coords["`"]=coords["´"];

coords["e"]=[221,86];
coords["€"]=coords["e"];


coords["r"]=[306,86];
coords["t"]=[392,86];
coords["z"]=[476,86];
coords["u"]=[562,86];
coords["i"]=[647,86];
coords["o"]=[731,86];
coords["p"]=[816,86];

coords["ü"]=[901,86];

coords["+"]=[986,86];
coords["*"]=coords["+"];

coords["a"]=[70,172];
coords["s"]=[156,172];
coords["d"]=[241,172];
coords["f"]=[327,172];
coords["g"]=[411,172];
coords["h"]=[495,172];
coords["j"]=[581,172];
coords["k"]=[666,172];

coords["l"]=[751,172];
coords["@"]=coords["l"];

coords["ö"]=[836,172];
coords["ä"]=[921,172];

coords["'"]=[1006,172];
coords["#"]=[1006,172];

coords["<"]=[26,257];
coords[">"]=[26,257];

coords["y"]=[111,257];
coords["x"]=[197,257];
coords["c"]=[282,257];
coords["v"]=[368,257];
coords["b"]=[453,257];
coords["n"]=[537,257];
coords["m"]=[622,257];

coords[","]=[707,257];
coords[";"]=coords[","];

coords["."]=[792,257];
coords[":"]=coords["."];

coords["-"]=[876,257];
coords["_"]=coords["-"];

coords[" "]=[461,340];

$(document).ready(function(){


	var canvas =document.getElementById('draw');
	$("#entertext").focus();
	var ctx = canvas.getContext("2d");
	ctx.beginPath();
	ctx.width=1084;
	var x=new Array();
	var y=new Array();
	var grd=ctx.createLinearGradient(0,0,1084,0);
	gradient[1]=["#d316d5","#0a7fbf","#dd6f3e"];
	gradient[2]=["#f9b523","#22bc29","#ffff40"];
	grdnr=Math.floor(Math.random() * 3);

	$("a.share").click(function(){
		$(".shareinput").fadeIn().select();
	});
	
	$("#entertext").keyup(function(e){
		if($("#entertext").val()==""){
			grdnr=Math.floor(Math.random() * 3);
			$(".share, .shareinput").fadeOut();
		}else{
			$(".share").fadeIn();
			
		}
		$(".shareinput").val("http://juliussohn.github.io/type-patterns/#"+encodeURI($(this).val()))
	
		
		letters=$("#entertext").val().split("");
		canvas.width = canvas.width;	   
		$("."+e.keyCode).stop().animate({opacity:0.7},100,function(){$(this).animate({opacity:0},500)});
		for(i = 0; i < letters.length; i++) {
			if(x[i]>coords[letters[i].toLowerCase()][0]+20 && x[i]<coords[letters[i].toLowerCase()][0]+60){
			}else{
				 x[i]=coords[letters[i].toLowerCase()][0]+Math.floor(Math.random() * 40)+20;
			}
		    if(y[i]>coords[letters[i].toLowerCase()][1]+20 && y[i]<coords[letters[i].toLowerCase()][1]+60){
			}else{
				 y[i]=coords[letters[i].toLowerCase()][1]+Math.floor(Math.random() * 40)+20;
			}
			//x[i]=coords[letters[i].toLowerCase()][0]+Math.floor(Math.random() * 40)+20;
		    //y[i]=coords[letters[i].toLowerCase()][1]+Math.floor(Math.random() * 50)+20;
		    if(i==0){ctx.moveTo(x[i], y[i]); 
		    }else{
		    	 ctx.lineTo(x[i],y[i]);
		    }
		   
		}

		grd.addColorStop(0,gradient[1][grdnr]);
	grd.addColorStop(1,gradient[2][grdnr]);
	ctx.strokeStyle=grd;
	//ctx.lineCap="round";
	//ctx.lineJoin="round";
	//ctx.setLineDash([5,3]);
	ctx.lineWidth=2;

		ctx.stroke();
	
	})
	if(hash!=""){
		$("#entertext").val(decodeURI(hash));
		$("#entertext").trigger("keyup");
	}
})







