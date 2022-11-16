// Function to generate markdown for README
function generateMarkdown(data) {
  return ` 
  # Project Title
  ${data.title}
  ${data.getLicense}

  # Description
  ${data.description}

  # Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#License)
  * [Contributing](#contributing)
  * [Tests](#Tests)
  * [Questions](#questions)
   
  # Installations
  ${data.installation}

  # Usage
  ${data.usage}

  # License
  ${data.license}

  # Contributing
  ${data.contributing}

  # Tests
  ${data.tests}

  # Contact Info
  * Github Username: ${data.userName}
  * Email: ${data.userEmail}
`;
}

module.exports = generateMarkdown;
