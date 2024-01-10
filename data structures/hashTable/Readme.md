# HashTable

Hash tables provide efficient average-case time complexity for operations such as insertion, retrieval, and deletion, making them widely used in various applications, including databases, caches, and language runtime environments. The effectiveness of a hash table depends on the quality of the hash function and the chosen collision resolution strategy.

## Table Of Contents

1. [Usage](#usage)
2. [Mechanism](#mechanism)
3. [Sample](hashTable.js)

## Usage

Hash tables are well-suited for a variety of problems and scenarios. Here are some situations where using a hash table:

1. Fast Lookups:
    - Hash tables provide constant-time average-case complexity for basic operations like insertions, retrievals, and deletions. This makes them efficient for scenarios where quick lookups are crucial.

2. Associative Data:
    - When you need to associate keys with values, hash tables provide an excellent way to implement associative arrays. This is common in scenarios like storing and retrieving data based on unique identifiers.

3. Deduplication:
    - Hash tables can be used to efficiently identify and remove duplicate elements from a collection. By hashing elements and checking for collisions, you can quickly identify duplicates.

4. Frequency Counting:
    - Hash tables are useful for counting the frequency of elements in a collection. Each element can be hashed, and the hash table keeps track of the count for each unique element.

## Mechanism

Here's a step-by-step explanation of how a hash table works:

1. Hash Function

    - A hash function takes an input (or key) and produces a fixed-size string of characters, which is usually a hash code or hash value.The goal of the hash function is to distribute keys evenly across the available buckets.

2. Array or Buckets

    - The hash table is typically implemented as an array of buckets, where each bucket is a storage unit that can hold one key-value pair.
    - The number of buckets is determined when the hash table is created.

3. Hashing Process:

    - When you want to insert a key-value pair into the hash table, the hash function is applied to the key to determine the index where the pair will be stored.
    - The hash function converts the key into an index within the valid range of indices (0 to the number of buckets - 1).

4. Collision Handling:

    - Hash collisions occur when two different keys produce the same hash value or index. Since the hash function is not guaranteed to be unique, collisions are inevitable.
    - There are various techniques to handle collisions, and two common ones are chaining and open addressing:
    - Chaining: Each bucket is the head of a linked list, and collisions result in elements being added to the linked list at the corresponding bucket.
    - Open Addressing: When a collision occurs, the algorithm searches for the next available slot in the array to place the key-value pair.

5. Retrieval:

    - When you want to retrieve a value associated with a key, the hash function is applied to the key again to determine the index.
    - The hash table looks into that index and, based on the collision resolution strategy, either directly finds the value or navigates through a linked list or probes through the array until it finds the correct key-value pair.

6. Deletion:

    - To delete a key-value pair, the hash table finds the index using the hash function, locates the pair (considering collision resolution), and removes it.