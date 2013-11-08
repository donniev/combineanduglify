var fs=require("fs")
	,path=require("path")
	,_=require("underscore")._;
exports.combineAndUglify=function(inArray,baseLocation,outFile,minimize){
	minimize=minimize?minimize:false;
	console.log(path.resolve(baseLocation));
	console.log(inArray,baseLocation,outFile,minimize);
	var out="";
	_.each(inArray,function(fileName,i,list){
		out+=fs.readFileSync(path.resolve(baseLocation+"/"+fileName),"UTF8");
	});
	if(minimize){
		//var ug=require("uglify-js");
		//nofr console.log(ug);
		var jsp = require("uglify-js").parser;
		var pro = require("uglify-js").uglify;
		var orig_code = out;
		var ast = jsp.parse(orig_code); // parse code and get the initial AST
		ast = pro.ast_mangle(ast); // get a new AST with mangled names
		ast = pro.ast_squeeze(ast); // get an AST with compression optimizations
		 out = pro.gen_code(ast); // compressed code here
	}
	
	fs.writeFileSync(outFile, out, "utf8");
	
	
}

