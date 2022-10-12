# Test Data

---

### View Movie By ID

// Error: Unknown ID Format
node src/app --action read --search id --val 1

// Error: Nothing Found For ID: "63454bc95a1554790bd1cfb3"
node src/app --action read --search id --val 63454bc95a1554790bd1cfb3

// Returns Search Results
node src/app --action read --search id --val 63454bc1b5edbacb9ebebaec

---

### View Movie By Title

// Error: Unknown ID Format
node src/app --action read --search title --val

// Error: Nothing Found For Title: "Some Title"
node src/app --action read --search title --val "Some Title"

// Returns Search Results
node src/app --action read --search title --val "Triple 9"

---

### View Movie By Actor

// Error: Unknown Actor Format
node src/app --action read --search actor --val

// Error: Nothing Found For Actor: "John Doe"
node src/app --action read --search actor --val "John Doe"

// Returns Search Results
node src/app --action read --search actor --val "Gregory Peck"

---

### View Movie By Director

// Error: Unknown Director Format
node src/app --action read --search director --val

// Error: Nothing Found For Director: "John Doe"
node src/app --action read --search director --val "John Doe"

// Returns Search Results
node src/app --action read --search director --val "Richard Donner"

---

### View Movie By Genre

// Error: Unknown Genre Format
node src/app --action read --search genre --val

// Error: Nothing Found For Genre: "xxxx"
node src/app --action read --search genre --val "xxxx"

// Returns Search Results
node src/app --action read --search genre --val "Horror"

---

### View Movie By Release Year

// Error: Unknown Release Year Format
node src/app --action read --search released --val

// Error: "Nothing Found For Release Year: "0000"
node src/app --action read --search released --val "0000"

// Returns Search Results
node src/app --action read --search released --val "1976"

---

### View Movie By Rating

// Error: Unknown Rating Format
node src/app --action read --search rating --val

// Error: Nothing Found For Rating: "0"
node src/app --action read --search rating --val "0"

// Returns Search Results
node src/app --action read --search rating --val "3"

---

### View All Movies

// Returns List Of All Movies
node src/app --action read

---
