// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'Apache':
      return '![license](https://img.shields.io/badge/License-Apache_2.0-blue.svg)'
    case 'Boost':
      return '![license](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)'
    case 'MIT':
      return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
    case 'No License':
      return ''
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'Apache':
      return '(https://opensource.org/licenses/Apache-2.0)'
    case 'Boost':
      return '(https://www.boost.org/LICENSE_1_0.txt)'
    case 'MIT':
      return '(https://opensource.org/licenses/MIT)'
    case 'No License':
      return ''
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case 'Apache':
      return 'This application is licensed under Apache License, Version 2.0'
    case 'Boost':
      return '(This application is licensed under Boost Software License, Version 1.0'
    case 'MIT':
      return 'This application is licensed under The MIT License'
    case 'No License':
      return ''
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}\n
  ${renderLicenseBadge(data.license)}\n\n
  ## Description\n\n
  ${data.description}\n\n
  ## Table of Contents\n\n
  -- [Installation](#Installation)\n
  -- [Usage](#Usage)\n
  -- [Contribution](#Contributing)\n
  -- [Test](#Test)\n
  -- [License](#License)\n\n
  ## Installation\n\n
  ${data.installation}\n\n
  ## Usage\n\n
  ${data.usage}\n\n
  ## Contributing\n\n
  ${data.contributing}\n\n
  ## Test\n\n
  ${data.test}\n\n
  ## License\n\n
  ${renderLicenseLink(data.license)}\n
  ${renderLicenseSection(data.license)}\n\n
  ## Questions\n\n
  [GitHub](https:github.com/${data.github})\n
  [E-Mail](mailto:${data.email})\n
`;
};

module.exports = generateMarkdown;
