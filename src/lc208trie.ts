export class TrieNode {
  nextNodes: TrieNode[];
  value: string;
  termination: boolean;
  constructor(val: string) {
    this.nextNodes = [];
    this.value = val;
    this.termination = false;
  }

  addNextNodes(node: TrieNode): void {
    this.nextNodes.push(node);
  }

  findValueInNext(val: string): TrieNode | null {
    const searchResult = this.nextNodes.find(
      (ele: TrieNode) => ele.value === val
    );
    return searchResult ? searchResult : null;
  }
  addTermination() {
    this.termination = true;
  }
}

export class Trie {
  rootNode: TrieNode;
  constructor() {
    const BLANK_CHAR = "_";
    this.rootNode = new TrieNode(BLANK_CHAR);
  }

  insert(word: string): void {
    const chars = word.split("");

    let currentNode = this.rootNode;
    for (let i = 0; i < chars.length; i++) {
      const nextNode: TrieNode | null = currentNode.findValueInNext(chars[i]);
      if (nextNode === null) {
        const newNode = new TrieNode(chars[i]);
        currentNode.addNextNodes(newNode);
        currentNode = newNode;
      } else {
        currentNode = nextNode;
      }
    }
    currentNode.addTermination();
  }

  search(word: string): boolean {
    let currentNode = this.rootNode;
    for (let i = 0; i < word.length; i++) {
      const nextNode: TrieNode | null = currentNode.findValueInNext(word[i]);
      if (nextNode === null) {
        return false;
      }
      currentNode = nextNode;
    }

    return currentNode.termination;
  }

  private _contains(word: string[]): boolean {
    let currentNode = this.rootNode;
    for (let i = 0; i < word.length; i++) {
      const nextNode: TrieNode | null = currentNode.findValueInNext(word[i]);
      if (nextNode === null) {
        return false;
      }
      currentNode = nextNode;
    }

    return true;
  }

  startsWith(word: string): boolean {
    return this._contains(word.split(""));
  }
}
