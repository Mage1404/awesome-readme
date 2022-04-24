module.exports = templateData => {
    const licenseBadgeLinks = {
        "MIT": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
        "Apache 2.0":
          "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
        "GNU GPL v3":
          "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
        "BSD 3-Clause":
          "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
        "ISC": "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
      };
    tempdata = "";
    for (var i = 0; i < templateData.license.length; i++) {
      tempdata += "\n" + licenseBadgeLinks[templateData.license[i]]
    }
    return `# ${templateData.title}\n${tempdata}\n
## Description \n${templateData.description}\n
## Table of Contents \n
- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [How to Contribute](#How-to-Contribute)
- [Tests](#Tests)
- [Questions](#Contact-Me)\n

<a name="Installation"></a>
## Installation \n${templateData.installation}\n

<a name="Usage"></a>
## Usage \n${templateData.usage}\n

<a name="License"></a>
## License \n${templateData.title} is licensed under ${templateData.license} license.

<a name="How-to-Contribute"></a>
## How to Contribute \n${templateData.contribution}\n

<a name="Tests"></a>
## Tests \n${templateData.test}\n

<a name="Contact-Me)"></a>
## Questions \nPlease contact me if you have any questions regrading to this project, \nGithub: https://github.com/${templateData.github}, \nEmail: ${templateData.email}
`;
};