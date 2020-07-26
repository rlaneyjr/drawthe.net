'use strict';

var fs = require('fs');
var path = require('path');

function getFiles(dir){
  var fileList = [];
  var files = fs.readdirSync(dir);
  for(var i in files){
    if (!files.hasOwnProperty(i)) continue;
    var name = path.parse(files[i]).name;
    fileList.push(name);
  }
  return fileList.sort(
    function(a, b) {
      if (a.toLowerCase() < b.toLowerCase()) return -1;
      if (a.toLowerCase() > b.toLowerCase()) return 1;
      return 0;
    }
  );
}

function createSections(dir){
  var dirList = [],
  var dirs = fs.readdirSync(dir);
  for(var i in dirs){
    if (!dirs.hasOwnProperty(i)) continue;
    var name = path.parse(dirs[i]).name;
    dirList.push(name);
  }
  return dirList.sort(
    function(a, b) {
      if (a.toLowerCase() < b.toLowerCase()) return -1;
      if (a.toLowerCase() > b.toLowerCase()) return 1;
      return 0;
    }
  );
}

var iconFamilies = {}
iconFamilies["aws"] = getFiles("aws")
iconFamilies["azureCloud"] = getFiles("azureCloud")
iconFamilies["azureEnterprise"] = getFiles("azureEnterprise")
iconFamilies["cisco"] = getFiles("cisco")
iconFamilies["gcp"] = getFiles("gcp")
// iconFamilies["mycisco"] = getFiles("mycisco")
// iconFamilies["myicons"] = getFiles("myicons")

fs.writeFile('../js/iconFamilies.json', JSON.stringify(iconFamilies, null, 2) , 'utf-8');
