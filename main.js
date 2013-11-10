var fs=require("fs")
   ,UglifyJS = require("uglify-js")
	,path=require("path")
	,_=require("underscore")._;
exports.combineAndUglify=function(inArray,baseLocation,outFile,minimize,debug){
	minimize=minimize?minimize:false;
	if(debug){
	console.log(path.resolve(baseLocation));
	console.log(inArray,baseLocation,outFile,minimize);
	}var out="";
	_.each(inArray,function(fileName,i,list){
		if(debug){
			console.log("Processing: %s",path.resolve(baseLocation+"/"+fileName))
		}
		if(minimize){
			out+=UglifyJS.minify(path.resolve(baseLocation+"/"+fileName)).code;
		}else{
		        out+=fs.readFileSync(path.resolve(baseLocation+"/"+fileName),"UTF8");
		}	
	
});
	fs.writeFileSync(outFile, out, "utf8");
	
	
}
exports.fixHtmlFile=function(htmlFile,baseLocation,outFile,minimize,debug){
	var source=fs.readFileSync(path.resolve(baseLocation+"/"+htmlFile),"utf8");
	var source=source.replace(/\n/g," ");
	var re=/<!--minifystart(.*)minifyend-->/g 
	var list=source.match(re).join("");
	if(debug){
	console.log(list);
	}
	re=/src="(.*?)"/g
     aFiles=list.match(re);
	if(debug){
		console.log(aFiles);
	}
	 _.each(aFiles,function(value,i,list){
		 var t=value.replace('src="',"").replace(/"/g,"");
		 if(t.indexOf("/")==0){
			 t=t.substring(1);
		 }
		 list[i]=t;
	 })
	 if(debug){
	 console.log(aFiles);
	 }
	 exports.combineAndUglify(aFiles,baseLocation,outFile,minimize,debug)
	

}



