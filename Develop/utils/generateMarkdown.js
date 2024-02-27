// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'Boost'){
    return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `

  # TABLE OF CONTENTS

  <!--ts-->
   * [Title](#title)
   * [Description](#description)
   * [Installation](#installation)
   * [Usage](#usage)
   * [License](#license)
   * [Contribution](#contribution)
   * [Email](#email)
<!--te-->


  # TITLE

  ### ${data.title}

  # DESCRIPTION

  ### ${data.description}

  # INSTALLATION

  ### ${data.installation}

  #USAGE

  ### ${data.usage}

  # LICENSE

  ### ${renderLicenseBadge(data.license)}

  #CONTRIBUTION

  ### ${data.contribution}

  #EMAIL

  ### ${data.email}

`;
}

module.exports = generateMarkdown;
