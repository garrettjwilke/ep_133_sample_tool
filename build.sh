#!/usr/bin/env bash

VERSION_NUMBER=$(cat .version_number)

write_version_number() {
  sed "s/VERSION_NUMBER/$VERSION_NUMBER/g" data/index.html.blank > data/index.html
  sed "s/VERSION_NUMBER/$VERSION_NUMBER/g" package.json.blank > package.json
  temp_message "Version number changed to: $VERSION_NUMBER"
  echo $VERSION_NUMBER > .version_number
}

message() {
  MESSAGE_1=$1
  MESSAGE_2=$2
  echo ""
  echo "-------------------"
  echo "$MESSAGE_1"
  echo "-------------------"
  echo ""
  if [ "$MESSAGE_2" == "" ]
  then
    return
  fi
  echo "$MESSAGE_2"
  echo ""
}

change_version_number() {
  OLD_NUMBER=$VERSION_NUMBER
  clear
  message "Input New Version Number" "Current Version Number: $VERSION_NUMBER"
  echo "New Version Number: "
  read NEW_NUMBER
  if [ "$NEW_NUMBER" == "" ]
  then
    temp_message "No version number input."
    version_number_check
    return
  else
    temp_message "New Version Number: $NEW_NUMBER"
    message "Write changes?" "Version will change from: $OLD_NUMBER to $NEW_NUMBER"
    echo "Write changes to project? (y/N)"
    read YESNO
    case $YESNO in
      y|Y|yes|Yes|YES) temp_message "Writing new version number to project.";VERSION_NUMBER=$NEW_NUMBER;write_version_number;;
      n|N|no|No|NO) temp_message "skipping version number change";;
      q|Q|quit|Quit|QUIT) temp_message "exiting.";exit;;
      "") temp_message "skipping version number change";;
      *) temp_message "invalid input.";change_version_number;;
    esac
  fi
}

temp_message() {
  clear
  echo "$1"
  sleep 1
}

version_number_check() {
  message "Change Version Number?" "Would you like to change the version number?"
  echo "Input y/N: "
  read YESNO
  case $YESNO in
    y|Y|yes|Yes|YES) change_version_number;;
    n|N|no|No|NO) temp_message "skipping version number change";;
    q|Q|quit|Quit|QUIT) temp_message "exiting.";exit;;
    "") temp_message "skipping version number change";;
    *) temp_message "invalid input.";version_number_check;;
  esac
}

run_locally() {
  npm start 
}

RUN_LOCAL="false"

run_check() {
  clear
  message "Would you like to run locally?" "Run a local instance of the sample tool?"
  echo "Yes or No (y/N)"
  read YESNO
  case $YESNO in
    y|Y|yes|Yes|YES) temp_message "starting local instance.";RUN_LOCAL="true";;
    n|N|no|No|NO) temp_message "Skipping Local instance.";RUN_LOCAL="false";;
    q|Q|quit|Quit|QUIT) temp_message "exiting.";exit;;
    "") temp_message "Skipping Local instance.";RUN_LOCAL="false";;
    *) temp_message "invalid input.";run_check;;
  esac
}

build_check() {
  message "Would you like to build for this platform?" "This will generate a binary executable in the dist directory"
  echo "Yes or No (y/N)"
  read YESNO
  case $YESNO in
    y|Y|yes|Yes|YES) temp_message "building project to dist directory.";npm install;npm run package;;
    n|N|no|No|NO) temp_message "exiting.";exit;;
    q|Q|quit|Quit|QUIT) temp_message "exiting.";exit;;
    "") temp_message "exiting.";exit;;
    *) temp_message "invalid input.";build_check;;
  esac
}

run_check
if [ "$RUN_LOCAL" == "true" ]
then
  run_locally
else
  version_number_check
  build_check
fi
