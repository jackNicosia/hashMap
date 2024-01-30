class HashMap {
  // Constructor to initialize the HashMap
  constructor(size = 10) {
    this.initialSize = size; // Store the initial size for the clear method
    this.size = size; // Current size of the buckets array
    this.buckets = new Array(size).fill(null).map(() => []); // Array of buckets, each bucket is an array
    this.count = 0; // Number of key-value pairs in the HashMap
    this.loadFactor = 0.7; // Load factor for resizing
  }

  // Hash function to convert a key into an index
  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i); // Convert each character to a number and add to the hash
    }
    return hash % this.size; // Ensure the hash is within the bounds of the buckets array
  }

  // Method to add or update key-value pairs
  set(key, value) {
    // Check if resizing is needed
    if (this.count / this.size >= this.loadFactor) {
      this.resize();
    }

    const index = this.hash(key); // Get the bucket index for the key
    const bucket = this.buckets[index];
    for (let i = 0; i < bucket.length; i++) {
      // Update value if key already exists
      if (bucket[i][0] === key) {
        bucket[i][1] = value;
        return;
      }
    }
    // Add a new key-value pair if key does not exist
    bucket.push([key, value]);
    this.count++;
  }

  // Method to resize the buckets array when load factor is exceeded
  resize() {
    const newSize = this.size * 2;
    const newBuckets = new Array(newSize).fill(null).map(() => []);
    const oldBuckets = this.buckets;
    this.buckets = newBuckets;
    this.size = newSize;
    this.count = 0;

    // Rehash all existing key-value pairs into the new buckets
    oldBuckets.forEach((bucket) => {
      bucket.forEach(([key, value]) => {
        this.set(key, value);
      });
    });
  }

  // Method to get the value for a given key
  get(key) {
    const index = this.hash(key); // Get the bucket index for the key
    const bucket = this.buckets[index];
    // Search for the key in the bucket
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return bucket[i][1]; // Return the value if key is found
      }
    }
    return null; // Return null if key is not found
  }

  // Method to check if a key exists in the HashMap
  has(key) {
    const index = this.hash(key); // Get the bucket index for the key
    const bucket = this.buckets[index];
    // Search for the key in the bucket
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return true; // Return true if key is found
      }
    }
    return false; // Return false if key is not found
  }

  // Method to remove a key-value pair
  remove(key) {
    const index = this.hash(key); // Get the bucket index for the key
    const bucket = this.buckets[index];
    // Search for the key in the bucket
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1); // Remove the key-value pair
        this.count--;
        return true; // Return true to indicate successful removal
      }
    }
    return false; // Return false if key is not found
  }

  // Method to get the number of key-value pairs
  length() {
    return this.count;
  }

  // Method to clear all key-value pairs and reset the HashMap
  clear() {
    this.size = this.initialSize; // Reset the size to the initial size
    this.buckets = new Array(this.size).fill(null).map(() => []); // Reset the buckets
    this.count = 0; // Reset the count
  }

  // Method to get all keys in the HashMap
  keys() {
    const keyList = [];
    for (let i = 0; i < this.buckets.length; i++) {
      for (let j = 0; j < this.buckets[i].length; j++) {
        keyList.push(this.buckets[i][j][0]);
      }
    }
    return keyList;
  }

  // Method to get all values in the HashMap
  values() {
    const valueList = [];
    for (let i = 0; i < this.buckets.length; i++) {
      for (let j = 0; j < this.buckets[i].length; j++) {
        valueList.push(this.buckets[i][j][1]);
      }
    }
    return valueList;
  }

  // Method to get all entries (key-value pairs) in the HashMap
  entries() {
    const entryList = [];
    for (let i = 0; i < this.buckets.length; i++) {
      for (let j = 0; j < this.buckets[i].length; j++) {
        entryList.push([this.buckets[i][j][0], this.buckets[i][j][1]]);
      }
    }
    return entryList;
  }
}

// Create a new HashMap instance
const myMap = new HashMap();
console.log("HashMap created:", myMap);

// Set key-value pairs
console.log("Set key1:", myMap.set("key1", "value1"));
console.log("Set key2:", myMap.set("key2", "value2"));
console.log("Set key3:", myMap.set("key3", "value3"));
console.log("Set key4:", myMap.set("key4", "value4"));
console.log("Set key5:", myMap.set("key5", "value5"));
console.log("Set key6:", myMap.set("key6", "value6"));
console.log("Set key7:", myMap.set("key7", "value7"));
console.log("Set key8:", myMap.set("key8", "value8"));
console.log("Set key9:", myMap.set("key9", "value9"));
console.log("Set key10:", myMap.set("key10", "value10"));
console.log("Set key11:", myMap.set("key11", "value11"));
console.log("Set key12:", myMap.set("key12", "value12"));
console.log("Set key13:", myMap.set("key13", "value13"));
console.log("Set key14:", myMap.set("key14", "value14"));

// Get a value for a specific key
console.log("Get key3:", myMap.get("key3"));

// Check if a key exists in the hashmap
console.log("Has key9:", myMap.has("key9"));
// Remove a key from the hashmap
console.log("Remove key13:", myMap.remove("key13"));
// Get the number of stored keys in the hashmap
console.log("Number of stored keys:", myMap.length());
// Clear the hashmap
console.log("Clear HashMap:", myMap.clear());

console.log("HashMap after clearing", myMap);

console.log("Set key1:", myMap.set("key1", "value1"));
console.log("Set key2:", myMap.set("key2", "value2"));
console.log("Set key3:", myMap.set("key3", "value3"));
console.log("Set key4:", myMap.set("key4", "value4"));
console.log("Set key5:", myMap.set("key5", "value5"));
// Get all keys from the hashmap
console.log("HashMap keys:", myMap.keys());
// Get all values from the hashmap
console.log("HashMap values:", myMap.values());
// Get all entries (key-value pairs) from the hashmap
console.log("HashMap entries:", myMap.entries());
