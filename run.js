var fs=require("fs")
   ,UglifyJS = require("uglify-js")
	,path=require("path")
	,_=require("underscore")._
    ,com=require("./main.js")
   	,args=process.argv;
	args.shift();
	args.shift();
	console.log(args)
	switch(args.length){
	case 3:
		com.fixHtmlFile(args[0],args[1],args[2],false,false);
		break;
	case 4:
		com.fixHtmlFile(args[0],args[1],args[2],["1","true","yes"].indexOf(args[3].toLowerCase())>=0?true:false,false);
		break;
	case 5:
		com.fixHtmlFile(args[0],args[1],args[2],["1","true","yes"].indexOf(args[3].toLowerCase())>=0?true:false,["1","true","yes"].indexOf(args[4].toLowerCase())>=0?true:false);
		break;
	default:
		console.log("Useage: node run.js  htmlfile basepath outfile minify debug");
	}
	
