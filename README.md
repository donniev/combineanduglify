CombineAndUglify
================

Introduction
------------
This a basically a wrapper for Uglify-js with the added feature of being able to combine multiple files into a single minified file. If one has many js files on a page, this can greatly reduce the number of server calls necessary to load a page.

Installation
------------
Download the project

    npm install combineanduglify
    
Command line usage
------------------
    node run.js <source file> <baselocation> <destination> <true|false> <true|false>
    
The source file is your file which references multiple js files
The base loacation is the base location on the file system where your pages live
		such that if src in your source files is "/foo/bar.js"  
		then baselocation/foo/bar is the the file on the file system.
The destination is the location of the combined file. For testing you may want to place this outside of your web root
The fourth paramater determines whether or not to minify the output file.
The fifth paramater when true produces debugging info to the console.

Programatic usage
-----------------
The module exports two functions:
    combineAndUglify=function(inArray,baseLocation,outFile,minimize,debug)
The first argument is an array of files to combine.
The remaining arguments are as discussed above.
When using this function the files to be included are provided, not determined by scraping an input file.
    fixHtmlFile=function(htmlFile,baseLocation,outFile,minimize,debug)
This function works the same as the command line version

Source File preparation
------------------------
You surround the file references with comment tags as follows:
    <!--minifystart
        <script src="/js/jtimerjqm.js"></script> 
        <script src="/js/bindings.js"></script> 
        <script src="/js/main.js"></script> 
        <script src="/js/puzzle.js"></script> 
        <script src="/js/encrypt.js"></script> 
        <script src="/js/ajaxWrapper.js"></script> 
        <script src="/js/divController.js"></script> 
        <script src="/js/fixconsole.js"></script> 
    minifyend-->
    <script src="/js/minified.js"></script>
    
Notice the reference to the output file generated by the module.
Note well that you can only combine files on your file system. You cannot combine files fetched from external locations.
