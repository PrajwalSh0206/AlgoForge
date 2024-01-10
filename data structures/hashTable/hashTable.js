class HashTable {
    constructor(size = 10) {
      this.size = size;
      this.buckets = new Array(size).fill(null).map(() => []);
    }
  
    hash(key) {
      let hashValue = 0;
      for (const char of key) {
        hashValue += char.charCodeAt(0);
      }
      return hashValue % this.size;
    }
  
    insert(key, value) {
      const index = this.hash(key);
      this.buckets[index].push({ key, value });
    }
  
    get(key) {
      const index = this.hash(key);
      const bucket = this.buckets[index];
  
      for (const entry of bucket) {
        if (entry.key === key) {
          return entry.value;
        }
      }
  
      return null; // Key not found
    }
  
    remove(key) {
      const index = this.hash(key);
      const bucket = this.buckets[index];
  
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i].key === key) {
          bucket.splice(i, 1);
          return; // Key found and removed
        }
      }
    }
  }
  
  // Example usage:
  const myHashTable = new HashTable();
  
  myHashTable.insert("name", "John");
  myHashTable.insert("age", 25);
  myHashTable.insert("city", "ExampleCity");
  
  console.log(myHashTable.get("name")); // Output: John
  console.log(myHashTable.get("age"));  // Output: 25
  console.log(myHashTable.get("city")); // Output: ExampleCity
  
  myHashTable.remove("age");
  console.log(myHashTable.get("age"));  // Output: null (key removed)
  