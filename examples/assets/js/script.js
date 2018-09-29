// Recursive iterator
let k = 0;

// Node data
let data = {
  ip: '192.168.0.1',
  name: 'SEP01',
  type: 'equipamento',
  utils: {
    power: 89,
    amp: 120,
    cons: 230
  }
}

// Config object
var config = {
  // View
  view: {
    container: "#tree-simple",
    levelSeparation: 50,
    siblingSeparation: 200,
    nodeAlign: 'BOTTOM',
    connectors: {
      type: 'step',
      style: {
        stroke: '#475059',
        "stroke-width": 2.5,
        "arrow-end": 'oval'
      }
    },
    animation: {
      nodeSpeed: 500,
      connectorsSpeed: 500
    },
    padding: 40
  },
  structure: { // Structure
    // Levels
    levels: {
      root: {
        HTMLclass: 'root',
        image: 'assets/img/root.svg'
      },
      node: {
        HTMLclass: '_node', // Because TreantJs ".node" default class
        image: 'assets/img/node.svg'
      },
      leaf: {
        HTMLclass: 'leaf',
        image: 'assets/img/leaf.svg'
      },
      collapse: {
        HTMLclass: 'arrow',
        image: 'assets/img/arrow.svg',
        collapsable: true
      }
    },
    // Connectors
    connectors: {
      collapse: {
        style: {
          "arrow-end": 'none',
          "stroke-dasharray": '- .'
        }
      }
    }
  }
}


// let Tree = new Node(data, [new Node(data)]);
// let Tree = new Node(data, [new Node(data), new Node(data)]);
// let Tree = new Node(data, [new Node(data), new Node(data, [new Node(data)])]);
// let Tree = new Node(data, [new Node(data), new Node(data, [new Node(data), new Node(data)]), new Node(data, [new Node(data), new Node(data)])]);

// let Tree = new Node(data, [
//   new Node(data),
//   new Node(data, [
//     new Node(data),
//     new Node(data)
//   ]),
//   new Node(data, [
//     new Node(data),
//     new Node(data)
//   ])
// ]);

// let Tree = new Node(data, [
//   new Node(data),
//   new Node(data, [
//     new Node(data),
//     new Node(data)
//   ]),
//   new Node(data, [
//     new Node(data)
//   ])
// ]);

let Tree = new Node(data, [
  new Node(data, [
    new Node(data),
    new Node(data)
  ])
]);

// --- new TreeView ---
new TreeView(config, Tree, $);
