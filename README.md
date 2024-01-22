# TV Show search 
Flatiron Softwear engineer course phase 2 project 

## Table of Contents
* [Phase2 project requirement](#phase2-project-requirements)
* [My React single page application](#my-react-single-page-application)
* [Technologies](#technologies)
* [API](#apidata-source)


## Phase2 project requirements

[Project guidelines are here. ](https://github.com/learn-co-curriculum/react-hooks-phase-2-project)

1. You must make a single page application (only one `index.html` file) using
   `create-react-app`.
2. Your app should use at least 5 components in a way that keeps your code well
   organized.
3. There should be at least 3 client-side routes using [React
   Router][react-router]. Be sure to include a nav bar or other UI element that
   allows users to navigate between routes.              |

4. Use a `json-server` to create a RESTful API for your backend and make both a
   `GET` and a `POST` request to the json server. Use a form to make your post
   request, specifically a controlled form/component. Additionally, you may
   choose to incorporate data from an external API but it is not required.

5. Add some styling: you're encouraged to write your CSS from scratch, either by
   using [styled components][] or writing CSS files and using id/className to
   style your elements. You can also incorporate a UI framework (like [React
   Bootstrap][react-bootstrap], [Semantic UI][semantic-ui], or [Material
   UI][material-ui]) if you prefer.

## My React single page application
The main page shows the top 10 high-rated shows. The all shows tab has the list of all shows so we can use filters and sorts to find what we are the most interested in. If the shows you watched is missing, please add them from "Add" tab.  

[TV Show Search App](https://github.com/RumiYo/phase-2-project/assets/131638126/709d5c26-cb57-4b60-bd62-c260774e9b4c)

## Technologies

### useNavigate()
useNavigate enable the programmatic navigation which change the browser URL, and show the user a new page in our application after a certain action, without making the user click on a link
useNavigate() was used on "Add" tab
```
import React,{useState} from "react";
import { useOutletContext, useNavigate } from "react-router-dom";

function AddAShow(){
    const { genres, addNewShow} = useOutletContext();
    const navigate = useNavigate();

    function submitClick(e){
        e.preventDefault();
        const newShow = { ... }
        fetch('http://localhost:3000/shows',{
            method: "POST",
            headers: {
                "Content-type":"application/json",
            },
            body: JSON.stringify(newShow),
        })
        .then(res => res.json())
        .then(data => {
            addNewShow(data)
            navigate(`/shows/${data.id}`)
        })
    }
}

```
_Reference: [Programmatic Navigation Code-Along](https://learning.flatironschool.com/courses/6558/assignments/259603?module_item_id=616056)_

### Array.prototype.sort()
The function in parenthesis determines the sort order. The return value should be a number whose sign indicates the relative order of the two elements: negative if a is less than b, positive if a is greater than b, and zero if they are equal. 
1. Sort was used to create TOP 10 show list on "Home" tab
```
    const showListRanking = showsList.sort((a,b) => b.rating.average - a.rating.average )
    const top10Shows = showListRanking.slice(0,10);
```
2. Sort was used for the sort filters on "All Shows" tab
```
if(filter==="Year"){
        displayedShowList = selectedGenreShows.sort((a,b) => {
            if(a.premiered < b.premiered){
                return 1;
            }if(a.premiered > b.premiered){
                return -1;
            }
            return 0;
        })
    }else if(filter==="Rating"){
         displayedShowList = selectedGenreShows.sort((a,b) => b.rating.average - a.rating.average )
    }
    else if(filter==="Name"){
         displayedShowList = selectedGenreShows.sort((a,b) => {
            if(a.name < b.name){
                return -1;
            }if(a.name > b.name){
                return 1;
            }
            return 0;
        })
    }  
```

_Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort_

### Overlay
The code below is added in App.css to show the show details with the overlay format.
```
div#showDetail{
  position: fixed; /* Set on top of the page content */
  width: 60%; /* Full width (cover the whole page) */
  min-height: 60%; /* Full height (cover the whole page) */
  max-height: 80%;
  top: 16%;
  left: 15%;
  background-color: #96967A;/* Black background with opacity */
  z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
  cursor: pointer;  /* Add a pointer on hover */

  color: white;
  padding: 0% 5% 3% 5%;
  opacity: 0.95;
  overflow: auto;
}
```
_Reference:  https://www.w3schools.com/howto/howto_css_overlay.asp_


### Color palette
The palette below is used to cordinate the application in the sae type of colors.

[Color palette](https://github.com/RumiYo/phase-2-project/assets/131638126/b146777e-8909-4a2f-adb8-8e0400ac8472)

_Reference:  https://coolors.co/palette/cb997e-eddcd2-fff1e6-f0efeb-ddbea9-a5a58d-b7b7a4_


## API (Data Source)
#### Data Source
The data was extracted from this API.
- TMAZE API    _https://www.tvmaze.com/api_
And some parameters were removed with the tool below.
https://jsoneditoronline.org/

#### List of Free Open APIs
This page was refered to find a good data source.
- _https://mixedanalytics.com/blog/list-actually-free-open-no-auth-needed-apis/_






