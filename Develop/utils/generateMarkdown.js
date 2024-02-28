// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'Boost'){
    return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
  } else if (license === 'Apache') {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else if (license === 'BSD') {
    return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
  } else {
    return `There is currently no license.`
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `

  # Title

  ## ${data.title}

  # Description

  ${data.description}

  # Table of Contents

  <!--ts-->
   * [Title](#title)
   * [Description](#description)
   * [Installation](#installation)
   * [Usage](#usage)
   * [License](#license)
   * [Contribution](#contribution)
   * [Tests](#tests)
   * [Questions](#questions)
<!--te-->

  # Installation

  ${data.installation}

  # Usage

  ${data.usage}

  # License

  ${renderLicenseBadge(data.license)}

  # Contribution

  ${data.contribution}

  # Tests

  ${data.tests}

  # Questions

  Please email: ${data.email} 

  Github account: https://github.com/${data.github}

`;
}

module.exports = generateMarkdown;
