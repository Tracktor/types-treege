# @types/treege

TypeScript type definitions for Treege - a library for handling tree data structures.

## Installation

```bash
  npm install --save-dev @tracktor/types-treege 
```

or with other package manager:

```bash
  yarn add --dev @tracktor/types-treege
  bun add --dev @types/treege
  pnpm add --dev @tracktor/types-treege
```

## Usage

```typescript
import { TreeNode } from '@tracktor/types-treege';

const myTree: TreeNode = {
  uuid: "root",
  attributes: {
    depth: 0,
    isRoot: true,
    name: "root",
    label: "Root Node",
    type: "text"
  },
  children: []
};
```

## Available Types

This library provides the following type definitions:

- `TreeNode`: Main structure representing a node in the tree
- `TreeNodeFieldAttributes`: Attributes for field-type nodes
- `TreeNodeValueAttributes`: Attributes for value-type nodes
- `FieldType`: Supported field types
- `TreeValues`: Value options for selection fields
- `Route`: API configuration for autocomplete
- `BackendConfig`: Backend configuration
- `TreePath`: Representation of a path in the tree
- And other auxiliary types...

## License

MIT
