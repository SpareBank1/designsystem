import { dirname, basename, extname } from 'path';
import find from 'lodash.find';
import map from 'lodash.map';
import sortBy from 'lodash.sortby';

class Node {
    children = [];
    value;

    constructor(edge, parentNode) {
        this.edge = edge;
        this.parentNode = parentNode;
    }

    get isLeaf() {
        return this.children.length === 0;
    }

    get hasValue() {
        return typeof this.value !== 'undefined';
    }

    get hasChildren() {
        return this.children.length > 0;
    }

    get isRoot() {
        return false;
    }

    get path() {
        if (this.parentNode.isRoot) {
            return this.edge;
        }

        return [this.parentNode.path, this.edge].join('_');
    }

    insert(path, value) {
        const [edge, ...subpath] = path;

        let child = find(this.children, c => c.edge === edge);

        if (!child) {
            child = new Node(edge, this);
            this.children.push(child);
        }

        if (subpath.length) {
            child.insert(subpath, value);
        } else {
            child.value = value;
        }

        this.children = sortBy(this.children, ['isLeaf', 'edge']);
    }
}

class RootNode extends Node {
    constructor(values) {
        super('__ROOT__');
        this.values = values;

        values.forEach(value => {
            this.insert(value.path, value.value);
        });
    }

    get isRoot() {
        return true;
    }

    get childEdges() {
        return this.children.map(child => child.edge);
    }

    filteredTree(cb) {
        return new RootNode(this.values.filter(cb));
    }
}

export default function createExampleTree(examples) {
    const getPath = sourceFileName => {
        const path = dirname(sourceFileName).split('/');
        path.push(basename(sourceFileName, extname(sourceFileName)));
        return path;
    };

    const values = map(examples, (example, key) => ({
        path: getPath(example.sourceFileName),
        value: { key, ...example },
    }));

    return new RootNode(values);
}
