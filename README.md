# Test Data

### Create Movie

// Error: Unknown Movie Format\
node src/app --action create --movie

// Error: Movie Already In DB\
node src/app --action create --movie "Bugsy Malone, Jodie Foster, Alan Parker, Comedy, 4, 1976"

// Movie Created + Details\
node src/app --action create --movie "_title_, _actor_, _director_, _genre_, _rating_, _released_"

---

### View Movie By ID

// Error: Unknown ID Format\
node src/app --action read --search id --val 1

// Error: Nothing Found For ID: "63454bc95a1554790bd1cfb3"\
node src/app --action read --search id --val 63454bc95a1554790bd1cfb3

// Returns Search Results\
node src/app --action read --search id --val 63454bc1b5edbacb9ebebaec

---

### View Movie By Title

// Error: Unknown Title Format\
node src/app --action read --search title --val

// Error: Nothing Found For Title: "Some Title"\
node src/app --action read --search title --val "Some Title"

// Returns Search Results\
node src/app --action read --search title --val "Triple 9"

---

### View Movie By Actor

// Error: Unknown Actor Format\
node src/app --action read --search actor --val

// Error: Nothing Found For Actor: "John Doe"\
node src/app --action read --search actor --val "John Doe"

// Returns Search Results\
node src/app --action read --search actor --val "Gregory Peck"

---

### View Movie By Director

// Error: Unknown Director Format\
node src/app --action read --search director --val

// Error: Nothing Found For Director: "John Doe"\
node src/app --action read --search director --val "John Doe"

// Returns Search Results\
node src/app --action read --search director --val "Richard Donner"

---

### View Movie By Genre

// Error: Unknown Genre Format\
node src/app --action read --search genre --val

// Error: Nothing Found For Genre: "xxxx"\
node src/app --action read --search genre --val xxxx

// Returns Search Results\
node src/app --action read --search genre --val Horror

---

### View Movie By Release Year

// Error: Unknown Release Year Format\
node src/app --action read --search released --val

// Error: Nothing Found For Release Year: "0000"\
node src/app --action read --search released --val 0000

// Returns Search Results\
node src/app --action read --search released --val 1976

---

### View Movie By Rating

// Error: Unknown Rating Format\
node src/app --action read --search rating --val

// Error: Nothing Found For Rating: "0"\
node src/app --action read --search rating --val 0

// Returns Search Results\
node src/app --action read --search rating --val 3

---

### View All Movies

// Returns List Of All Movies\
node src/app --action read

---

### Update Movie

// Error: Unknown ID Format\
node src/app --action update --id 123

// Error: Unknown Movie Format\
node src/app --action update --id 63454bc95a1554790bd1cfb3 --movie

// Error: Invalid Movie Format\
node src/app --action update --id 63454bc95a1554790bd1cfb3 --movie "Ted 2"

// Error: No Movie Found with ID: 6347033ba876da476757088f\
node src/app --action update --id 6347033ba876da476757088f --movie "Bugsy Malone, Jodie Foster, Alan Parker, Comedy, 4, 1976"

// Error: Movie With ID: 6347033ba876da476757088e Already Up To Date\
node src/app --action update --id 6347033ba876da476757088e --movie "3:33, Sandy, Nambikkai Chandru, Psychological Horror, 3, 2021"

// Movie Updated + Details\
node src/app --action update --id 6347033ba876da476757088e --movie "3:33, Sandy, Nambikkai Chandru, Psychological Horror, 4, 2021"

---

### Delete Movie

// Error: Unknown ID Format\
node src/app --action delete --id 123

// Error: No Movie Found With ID: 634704004304e2c9d1ce1371\
node src/app --action delete --id 634704004304e2c9d1ce1371

// Movie Deleted + Details\
node src/app --action delete --id 6347ea7eb3ced99c7b0da345

---

### Create TV Show

// Error: Unknown TV Show Format\
node src/app --action createShow --show

// Error: TV Show Already In DB\
node src/app --action createShow --show "Breaking Bad, Bryan Cranston, AMC, Crime Drama, 4, 2008"

// TV Show Created + Details\
node src/app --action createShow --show "_title_, _actor_, _director_, _genre_, _rating_, _released_"

---

### View TV Show By ID

// Error: Unknown ID Format\
node src/app --action readShow --search id --val 1

// Error: Nothing Found For ID: "6348163b6cc975ead36cf0ce"\
node src/app --action readShow --search id --val 6348163b6cc975ead36cf0ce

// Returns Search Results\
node src/app --action readShow --search id --val 634819f2d632bf541f3ff7a7

---

### View TV Show By Title

// Error: Unknown Title Format\
node src/app --action readShow --search title --val

// Error: Nothing Found For Title: "Some Title"\
node src/app --action readShow --search title --val "Some Title"

// Returns Search Results\
node src/app --action readShow --search title --val "Phoenix Nights"

---

### View TV Show By Actor

// Error: Unknown Actor Format\
node src/app --action readShow --search actor --val

// Error: Nothing Found For Actor: "John Doe"\
node src/app --action readShow --search actor --val "John Doe"

// Returns Search Results\
node src/app --action readShow --search actor --val "Peter Kay"

---

### View TV Show By Channel

// Error: Unknown Channel Format\
node src/app --action readShow --search channel --val

// Error: Nothing Found For Channel: "Channel Five"\
node src/app --action readShow --search channel --val "Channel Five"

// Returns Search Results\
node src/app --action readShow --search channel --val MTV

---

### View TV Show By Genre

// Error: Unknown Genre Format\
node src/app --action readShow --search genre --val

// Error: Nothing Found For Genre: xxxx\
node src/app --action readShow --search genre --val xxxx

// Returns Search Results\
node src/app --action readShow --search genre --val "Crime Drama"

---

### View TV Show By Release Year

// Error: Unknown Release Year Format\
node src/app --action readShow --search released --val

// Error: Nothing Found For Release Year: "0000"\
node src/app --action readShow --search released --val 0000

// Returns Search Results\
node src/app --action readShow --search released --val 2008

---

### View TV Show By Rating

// Error: Unknown Rating Format\
node src/app --action readShow --search rating --val

// Error: Nothing Found For Rating: "0"\
node src/app --action readShow --search rating --val 0

// Returns Search Results\
node src/app --action readShow --search rating --val 4

---

### View All TV Shows

// Returns List Of All TV Shows\
node src/app --action readShow

---

### Update TV Show

// Error: Unknown ID Format\
node src/app --action updateShow --id 123

// Error: Unknown TV Show Format\
node src/app --action updateShow --id 63454bc95a1554790bd1cfb3 --show

// Error: Invalid TV Show Format\
node src/app --action updateShow --id 63454bc95a1554790bd1cfb3 --show "Phoenix Nights 2"

// Error: No TV Show Found with ID: 634819f2d632bf541f3ff7a6\
node src/app --action updateShow --id 634819f2d632bf541f3ff7a6 --show "Phoenix Nights, Peter Kay, Channel 4, Comedy Sitcom, 4, 2001"

// Error: TV Show With ID: 634819f2d632bf541f3ff7a7 Already Up To Date\
node src/app --action updateShow --id 634819f2d632bf541f3ff7a7 --show "Phoenix Nights, Peter Kay, Channel 4, Comedy Sitcom, 4, 2001"

// TV Show Updated + Details\
node src/app --action updateShow --id 634819f2d632bf541f3ff7a7 --show "Phoenix Nights, Peter Kay, Channel 4, Comedy Sitcom, 5, 2001"

---

### Delete TV Show

// Error: Unknown ID Format\
node src/app --action deleteShow --id 123

// Error: No TV Show Found With ID: 634819f2d632bf541f3ff7a6\
node src/app --action deleteShow --id 634819f2d632bf541f3ff7a6

// TV Show Deleted + Details\
node src/app --action deleteShow --id 634819f2d632bf541f3ff7a7
