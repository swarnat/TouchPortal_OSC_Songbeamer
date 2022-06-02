# Touch Portal Plugin to Interact with Open Sound Control/OSC APIs
![](https://img.shields.io/github/downloads/swarnat/TouchPortal_OSC_General/total)

- [Touch Portal Plugin to Interact with OSC APIs](#touch-portal-plugin-to-interact-with-discord)
  - [Description](#description)
  - [ChangeLog](#changelog)
  - [Installation and Configuration](#installation-and-configuration)
  - [Known Issues](#known-issues--solutions)
 - [Dependencies](#dependencies)
- [Versioning](#versioning)
- [Authors](#authors)
- [License](#license)
- [Bugs/Enhancements](#bugsenhancements)
- [Acknowledgements](#acknowledgements)

## Description

Control OSC cappable software / devices from your TouchPortal device.  

Target of this repository / plugin is to provide a framework for more specific OSC plugins, which can control dedicated software, without to know the exact paths.  
As example this plugin provide 3 actions to send any parameter to any URL, which can be configured in editor.

Every Action you define within **entry.tp**, will be automatically call the function you define within the equal named file in **src/actions** Folder, where you also get the parameters.  
See the existing actions as example.

## ChangeLog
```
v1.0.5
  - First version
```

## Installation and Configuration
1. Download the .tpp file the installer for your OS [Windows](https://github.com/swarnat/TouchPortal_OSC_General/tree/master/Installers/OSCConnector-Win.tpp) OR [MacOS](https://github.com/swarnat/TouchPortal_OSC_General/tree/master/Installers/OSCConnector-Mac.tpp):
1. Go to Touch Portal Settings (the gear icon)
1. Go To Plug-ins
1. Click the Import Plug-in button
1. Navigate to the downloaded tpp file, select it and press Open
1. A popup should tell you Successfully Imported plugin
   1. If this is your first time importing, you will be asked To Trust the Plugin, to prevent this from popping up each time you start Touch Portal, click Trust Always
1. Now Select Touch Portal OSC General Plugin in the dropdown on the Plug-ins settings page
1. Configure your OSC Server IP and Port

## Known Issues & Solutions
1. **Float32** - Because NodeJS internally works with Float64, but OSC only with Float32, floats are rounded

# Dependencies
 - [touchportal-api](https://www.npmjs.com/package/touchportal-api)
 - [archiver](https://www.npmjs.com/package/archiver)
 - [node-osc](https://www.npmjs.com/package/node-osc)
 - [osc-min](https://www.npmjs.com/package/osc-min)
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
