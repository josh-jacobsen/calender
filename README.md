# Teletrac Navman Frontend Task

## Requirements

| Requirement | State | Comments |
| --------------- | --------------- | --------------- |
| Create a react application that matches the spirit of the Calendar application design | Complete | A lot of styling left to do, but it 'matches the spirit' ;) |
| Ensure that the application behaves well responsively on at least 2 form factors: mobile & desktop | Complete | At < 768px it will break to mobile view |
| Integrate the Weather visualization to an available weather service | Not yet complete |  |
| Use a redux store to manage ToDo state, adding appropriate actions and reducers. Persist ToDo Description & Due Date and Postponed, Complete, and Undone (reactivated) states. | Complete |  |
| Create an Add ToDo modal dialog which has 2 fields: Description and Due Date. Due Date should allow for date & time selection. The modal footer should have 2 actions buttons: Cancel and Save which close the dialog. | Almost complete | The modal does not yet allow for selecting the time |
| Integrate Add ToDo dialog to redux store. | Complete | |
| Integrate Timeline to redux store | Not yet complete | |
| Integrate Calendar to redux store | Complete | 
| Integrate Footer data visualization to redux store. | Complete | 
| Error checking will be set to strict for viewing completed code | Complete | 
| Mock and integrate a JSON API for the relevant GET, POST, & PUT endpoints. | Not yet complete | |


## Running the project 

```
git clone https://github.com/josh-jacobsen/teletrac.git
cd teletrac
yarn install
yarn start
Open http://localhost:3000 to view the Calendar application in the browser.
```

### Running tests 
There aren't any at the moment. This was on my todo list....
```
yarn test
```

