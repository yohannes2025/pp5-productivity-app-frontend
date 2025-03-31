// //SearchBar.js
// import React, { useState } from "react";
// import { FaSearch } from "react-icons/fa";
// import { Form, Button, Container, InputGroup } from "react-bootstrap";

// const SearchBar = () => {
//   const [searchTerm, setSearchTerm] = useState("");

//   const handleInputChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const handleSearch = () => {
//     // Perform search logic here
//     console.log("Searching for:", searchTerm);
//   };

//   return (
//     <Container
//       className="d-flex justify-content-center align-items-center"
//       style={{ height: "100vh" }}
//     >
//       <InputGroup className="mb-3">
//         <Form.Control
//           type="text"
//           placeholder="Search..."
//           value={searchTerm}
//           onChange={handleInputChange}
//         />
//         <Button onClick={handleSearch}>
//           <FaSearch />
//         </Button>
//       </InputGroup>
//     </Container>
//   );
// };

// export default SearchBar;

//SearchBar.js
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Form, Button, Container, InputGroup } from "react-bootstrap";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    // Perform search logic here
    console.log("Searching for:", searchTerm);

    // Simulating a search API call
    const results = performSearch(searchTerm);
    setSearchResults(results);
  };

  const performSearch = (term) => {
    // Implement your search logic here
    // This is a simple example, but you can replace it with your actual search functionality
    const dummyResults = [
      { id: 1, title: "Result 1" },
      { id: 2, title: "Result 2" },
      { id: 3, title: "Result 3" },
    ];

    // Filter the results based on the search term
    return dummyResults.filter((result) =>
      result.title.toLowerCase().includes(term.toLowerCase())
    );
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div>
        <InputGroup className="mb-3">
          <Form.Control
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleInputChange}
          />
          <Button onClick={handleSearch}>
            <FaSearch />
          </Button>
        </InputGroup>

        {/* Display the search results */}
        {searchResults.length > 0 && (
          <div>
            <h3>Search Results:</h3>
            <ul>
              {searchResults.map((result) => (
                <li key={result.id}>{result.title}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Container>
  );
};

export default SearchBar;