# Touch Portal Plugin to Interact with Songbeamer over OSC
![](https://img.shields.io/github/downloads/swarnat/TouchPortal_OSC_General/total)

- [Touch Portal Plugin to Interact with OSC APIs](#touch-portal-plugin-to-interact-with-discord)
  - [Description](#description)
  - [ChangeLog](#changelog)
  - [Installation and Configuration](#installation-and-configuration)
- [Dependencies](#dependencies)
- [Versioning](#versioning)
- [Authors](#authors)
- [License](#license)
- [Bugs/Enhancements](#bugsenhancements)
- [Acknowledgements](#acknowledgements)

## Description

Since Version 5.16c, Songbeamer support remote controll over OSC protocol.

## ChangeLog
```
v1.1.0
  - Implemented multiple states
v1.0.0
  - First version
```

## Installation and Configuration
1. Create a Marco in Songbeamer with the content "inisfs.osc.enabled := true;" to enable OSC and restart Songbeamer
2. Download tpp File for your Operation system and install the plugin into TouchPortal
3. Default values should be correct by default, when you don't adjust port settings
4. Import the demo page "Songbeamer-Demopage.tpz" from this repository to get an overview about functions

# Dependencies

This list describe libraries, which are used during development of this project.

 - [touchportal-api](https://www.npmjs.com/package/touchportal-api)
 - [archiver](https://www.npmjs.com/package/archiver)
 - [node-osc](https://www.npmjs.com/package/node-osc)
 - [osc](https://www.npmjs.com/package/osc)
 - [require-dir](https://www.npmjs.com/package/require-dir)

# Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/swarnat/TouchPortal_OSC_General/tags).

# Authors

- **Stefan Warnat** - _Initial work_ - [swarnat](https://github.com/swarnat)

This plugin heavily make use of the NodeJS SDK from **Jameson Allen** - [Spdermn02](https://github.com/spdermn02)

# License

This project is licensed under the GPL 3.0 License - see the [LICENSE](LICENSE) file for details

# Bugs/Enhancements
Use the Github Issues tab to report any bugs/enhancements for this plug-in.

# Acknowledgements

This software only exists, because we have a phantastic [Touch Portal Software](https://www.touch-portal.com/)
