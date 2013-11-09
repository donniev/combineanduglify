var fs=require("fs")
   ,UglifyJS = require("uglify-js")
	,path=require("path")
	,_=require("underscore")._;
exports.combineAndUglify=function(inArray,baseLocation,outFile,minimize){
	minimize=minimize?minimize:false;
	console.log(path.resolve(baseLocation));
	console.log(inArray,baseLocation,outFile,minimize);
	var out="";
	_.each(inArray,function(fileName,i,list){
		if(minimize){
		out+=UglifyJS.minify(path.resolve(baseLocation+"/"+fileName)).code;
		}else{
		        out+=fs.readFileSync(path.resolve(baseLocation+"/"+fileName),"UTF8");
		}	
	
});
	fs.writeFileSync(outFile, out, "utf8");
	
	
}

