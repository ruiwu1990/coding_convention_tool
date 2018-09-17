This project is a coding convention checking tool. Here are the rules and library used:
<!-- # checking coding convention
pylint
cppcheck -->

* Python: rule-[PEP8](https://www.python.org/dev/peps/pep-0008/) lib-[pylint](https://www.pylint.org/#install).
* Java: rule-[Sun](https://raw.githubusercontent.com/checkstyle/checkstyle/master/src/main/resources/sun_checks.xml) or [Google]-(https://raw.githubusercontent.com/checkstyle/checkstyle/master/src/main/resources/google_checks.xml), Sub is used as default, lib-[checkstyle](http://checkstyle.sourceforge.net/cmdline.html#Download_and_Run)

The above code checkers should be installed before the app is set up.

Our project also uses [codemirror](https://codemirror.net/) to display codes on the webpage.
## Quick Start
### Local Test Setup
To fufil all the requirements for the python server, you need to run:
```
sudo pip3 install -r requirements.txt
```

### Docker Setup