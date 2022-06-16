# Moonshot Calendar

The test task from the Quin should be done in 3.5 hours. The main idea of the application is to display rocket launches on the map. By clicking on the market, the user can access information about the name of the rocket, the launch date, the agencies that participate in the launch. The user can change the start and end dates of the rocket launch period.

### User stories

- As a user, when I open the app, I want to see all the launches for the next 3 months, plotted on
  a map or globe.
- As a user, I want to be able to select a start date and an end date so I can filter the launches
  according to my selection.
- As a user, I want to be able to select a point on the map and see the name, time of launch, name
  of the launch pad and the agencies that are collaborating on the launch.
- As a user, I want to be able to see the first occurring launch depending on my start date and end
  date selection.
- As a user, I want to receive feedback when the app is loading so that I know that when I change
  something in the UI, something is being loaded
- As a user, I want to be able to filter the launches based on the agencies that are participating in
  the launches that are relevant to my selection of start and end date.
- As a user, I want to be able to filter the launches based on whether or not they were successful.
- As a user, I want to receive feedback when the app encounters an error in reaching the API.

### What was done?

- As a user, when I open the app, I want to see all the launches for the next 3 months, plotted on a map or globe.
- As a user, I want to be able to select a start date and an end date so I can filter the launches
  according to my selection.
- As a user, I want to be able to select a point on the map and see the name, time of launch, name
  of the launch pad and the agencies that are collaborating on the launch.
- As a user, I want to receive feedback when the app is loading so that I know that when I change
  something in the UI, something is being loaded
- As a user, I want to receive feedback when the app encounters an error in reaching the API.

### What would I improved?

- I would finish all work connected to filtering
- I would add test
- I would add notification in case of service error
- I would check application performance. In case of slow performance wrap some logic into useCalback/userMemo hooks, or wrapp component into React.Memo

### Based on:

- React
- TypeScript
- Redux-toolkit
- CSS
- Jest
- React Leaflet (I chose this map because it does not need to have additional settings like API key, it is also lightweight and has a simple API)
- React Datepicker

## To run locally:

Download the main branch

```
git clone https://github.com/KateKulazhenko/quin-moonshot.git
npm install
npm start
```
