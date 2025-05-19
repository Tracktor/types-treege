/**
 * Type definitions for Treege
 */
export type FieldType =
    | 'text'
    | 'number'
    | 'email'
    | 'file'
    | 'password'
    | 'tel'
    | 'address'
    | 'url'
    | 'date'
    | 'dateRange'
    | 'time'
    | 'timeRange'
    | 'switch'
    | 'checkbox'
    | 'hidden'
    | 'tree'
    | 'radio'
    | 'select'
    | 'autocomplete'
    | 'dynamicSelect'
    | 'title';

export interface TreeValues {
  id: string;
  label: string;
  value: string;
  message?: string;
}

export interface Params {
  id: string;
  key: string;
  value: string;
}

export interface PathKey {
  object?: string;
  value?: string;
  label?: string;
  image?: string;
}

export interface Route {
  url?: string;
  searchKey?: string;
  pathKey?: PathKey;
  params?: Params[];
}

export interface DefaultValueFromAncestor {
  /**
   * Unique identifier of the ancestor element from which the default value is inherited.
   */
  uuid: string;

  /**
   * (Optional) The name of the output model containing the value to map from.
   * For example, this could refer to an API or a structured object name.
   */
  outputModel?: string;

  /**
   * (Optional) The key path of the object in the output model.
   * For example, if the output model is an API response: "address.ZipCode" maps to the key "ZipCode" inside the object "address".
   *
   * This can also be a static value (e.g., a hardcoded string like "DefaultCountryCode" or "12345").
   * This can also be a boolean value (e.g., a hardcoded boolean like "true" or "false").
   */
  inputObjectKey?: string;
}


export interface TreeNode {
  uuid: string;
  children: TreeNode[];
  treeId?: string;
  treePath?: string;
  childrenTreeRest?: {
    currentTree: TreeNode;
    treePath?: string;
  }[];
  attributes:
      | {
    depth: number;
    tag?: string;
    helperText?: string;
    isDecision?: boolean;
    isLeaf?: boolean;
    isRoot?: boolean;
    label?: string;
    name: string;
    required?: boolean;
    step?: string;
    type: FieldType;
    value?: never;
    values?: TreeValues[];
    defaultValueFromAncestor?: DefaultValueFromAncestor;
    message?: never;
    tree?: TreeNode;
    treePath?: string;
    repeatable?: boolean;
    hiddenValue?: string;
    isDisabledPast?: boolean;
    route?: Route;
    parentRef?: string;
    initialQuery?: boolean;
    isMultiple?: boolean;
    pattern?: string;
    patternMessage?: string;
    messages?: {
      on?: string;
      off?: string;
    };
  }
      | {
    depth: number;
    tag?: string;
    helperText?: string;
    messages?: never;
    isDecision?: never;
    isLeaf?: boolean;
    isRoot?: never;
    label?: string;
    name: string;
    required?: never;
    step?: never;
    type?: never;
    value: string;
    values?: never;
    defaultValueFromAncestor?: DefaultValueFromAncestor;
    message?: string;
    tree?: never;
    treePath?: never;
    repeatable?: never;
    hiddenValue?: never;
    isDisabledPast?: boolean;
    route?: Route;
    parentRef?: string;
    initialQuery?: boolean;
    isMultiple?: boolean;
    pattern?: string;
    patternMessage?: string;
  };
}

export interface TreeNodeField {
  depth: number;
  helperText?: string;
  messages?: {
    on?: string;
    off?: string;
  };
  isDecision?: boolean;
  isLeaf?: boolean;
  isRoot?: boolean;
  label?: string;
  name?: string;
  required?: boolean;
  step?: string;
  type: FieldType;
  value?: never;
  values?: TreeValues[];
  message?: never;
  tree?: TreeNode;
  treePath?: string;
  repeatable?: boolean;
  hiddenValue?: string;
}

export interface TreePath {
  path: string;
  label: string;
}

export interface CurrentTree {
  id?: string;
  name?: string;
  errorName?: string;
}

export interface BackendConfig {
  baseUrl: string;
  authToken?: string;
  endpoints?: {
    workflow?: string;
    workflows?: string;
  };
}

export type ModalType = 'add' | 'edit' | 'delete' | 'save' | null;
