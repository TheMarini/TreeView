/* --- Node ---
  Node with data and possibility of others nodes as children
*/
class Node {
  constructor(data, children) {
    this.data = data;
    if (children)
      this.children = children;
  }
}

/* --- TreeView ---
  View a Tree passing as parameter:
  - configs : [Object] -> configuration of view and structure
  - tree : [Object] -> tree to show
  - (optional) jQuery : [Instance] -> instance of jQuery library
  - (optional) callback : [Function] -> callback to execute after creation of the TreeView
*/
class TreeView {
  constructor (configs, tree, jQuery, callback) {
    this.configs = configs;
    this.tree = tree;
    this.jQuery = jQuery;
    this.callback = callback;

    this.view = new Treant({chart: configs.view , nodeStructure: this._getStructure(tree)}, callback, jQuery);
  }

  // Stucture -> {}
  _getStructure (node) {
    let tree = this.configs.structure.levels.root;

    if (node.children) {
      if (node.children.length > 1) {
        tree.connectors = this.configs.structure.connectors.collapse;
        tree.children = [this.configs.structure.levels.collapse];
        tree.children[0].children = this._getChildren(node.children) // errrou
      } else {
        tree.children = this._getChildren(node.children)
      }
    }

    return tree;
  }

  // Children -> []
  _getChildren (node) {
    let children = [];

    for (let i = 0; i < node.length; i++) {
      if (node[i].children) {
        children[i] = this.configs.structure.levels.node;
        if (node[i].children.length > 1) {
          children[i].connectors = this.configs.structure.connectors.collapse;
          children[i].children = [this.configs.structure.levels.collapse];
          children[i].children[0].children = this._getChildren(node[i].children);
        } else {
          children[i].children = this._getChildren(node[i].children);
        }
      } else {
        children[i] = this.configs.structure.levels.leaf;
      }
    }

    return children;
  }
}
