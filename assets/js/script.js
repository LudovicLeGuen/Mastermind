
function duplicateChildNodes (parentId){
        var parent = document.getElementById(parentId);
        NodeList.prototype.forEach = Array.prototype.forEach;
        var children = parent.childNodes;
        children.forEach(function(item){
          var cln = item.cloneNode(true);
          parent.appendChild(cln);
        });
      };
      
      duplicateChildNodes("decoding-board");