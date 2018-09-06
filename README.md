# Eventify
Do you want to eventify your life? To make it fuller and brighter? Find your ideal events here.  

> A web app to see events happening in your city, big organised and local community events.
The web version of [event-app](https://github.com/emilyparkes/event-app).

## Eventify Design
_Coming soon -> Inspiration was drawn from ... for this look_
> Colour Palette  


## Eventify Code
### Getting Started:
- create your own branch off of master
- pull down any changes
```shell
git pull origin dev
```
- install dependencies
```shell
yarn || npm
```
  - if `sodium` does not build run 
  ```shell
  sudo apt install automake autoconf libtool
  ```
- create your database
```shell
yarn migrate
yarn seed
```
- using auth
  - check the `.env.example` file
  - change it to `.env`
  - change the `JWT_SECRET`
- start the server
```shell
yarn dev
```

## Eventify Testing
- Run the test command
```shell
yarn test
```
- Result: PASS for 36 test suites and 121 tests 
_(tests last run on 6th September 18)_

![](server/public/images-github/tests.png)

#### References
[Colour Palette](https://material.io/tools/color/#!/?view.left=0&view.right=0&primary.color=4527A0&secondary.color=4DD0E1)
