(() => {
    var semantic = (tree) => {
      eachBlockPre(tree, (block, f) => {
        console.log(block.name.value);
        if (f)
            block.symbolTable = {
                father: f.symbolTable,
                constants: block.constants,
                variables: block.variables,
                functions: block.functions
            }
        else {
          block.symbolTable = {
            father: null,
            constants: block.constants,
            variables: block.variables,
            functions: block.functions
          }
        }
    });
  }

    var eachBlockPre = (tree, action, f) => {
        console.log("Father: " + f);
        if (f)
            action(tree, f);
        else {
            action(tree);
        }
        for (var i in tree.functions) {
            eachBlockPre(tree.functions[i], action, tree);
        }
    };

    module.exports = semantic;
})();
