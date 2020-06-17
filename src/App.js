import React from "react";
import "./style/master.scss"; //applies global scss styles
import { uiData } from "./data/ui";
import FunctionUI from "./components/FunctionUI";
import orderBy from "lodash/orderBy";
import size from "lodash/size";

// this is a pre-built class given name App adding into component before render
export default class App extends React.Component {
   //this is a class component

   constructor() {
      super();
      console.log(uiData);

      this.state = {
         /*listOfThings: [], this would be mult things to set*/
         isFavoritesChecked: false,
         allFuncs: orderBy(uiData, "order", "desc"),
         displayedFuncs: orderBy(uiData, "order", "desc"),
         //storing the string to value of state and setting to Most Recent
         orderBy: '["order", "desc"]',
      };
   }
   //array
   filterFuncs(e) {
      //const userInput = e.target.id; //grabbing user input id method before doing state with search
      const isFavoritesChecked = document.getElementById("viewMode-favorites")
         .checked;
      console.log(isFavoritesChecked);
      const searchInput = document
         .getElementById("search-input")
         .value.toLowerCase(); // var to check input val and toLowerCase because its string
      const allFuncs = [...this.state.allFuncs]; // grabbing copy of all funcs with spread shallow copy
      //if (userInput === "viewMode-favorites") {
      if (isFavoritesChecked) {
         //set this to the oppisite of state above ! single exclamation means opposite of isfavorite check
         //we know if this is checked now by looking at page itself no longer look at state
         this.setState({ isFavoritesChecked: true });
         const favoriteFuncs = allFuncs.filter((func) => {
            // run filter on copy where is favorite is true
            return func.isFavorite;
         });
         console.log(favoriteFuncs); // expect a blank array in console
         //true goes to new array created by filter function
         const filteredFuncs = favoriteFuncs.filter((func) => {
            //if filter returns any part of the input ret true else ret false
            return func.name.toLowerCase().indexOf(searchInput) >= 0;
         });
         const orderArr = JSON.parse(this.state.orderBy);
         console.log("orderArr:", orderArr);
         // orders the filter functions
         const orderedFuncs = orderBy(filteredFuncs, ...orderArr);
         //setting the state displayed funcs to our filtered funcs
         this.setState({ displayedFuncs: orderedFuncs });
      } else {
         //  if it is not checked it will false if isfavcheck set the state to the opposite set this to the oppisite of state above ! single exclamation means opposite of isfavorite check
         this.setState({ isFavoritesChecked: false });
         const filteredFuncs = allFuncs.filter((func) => {
            return func.name.toLowerCase().indexOf(searchInput) >= 0;
         });
         //storing params
         const orderArr = JSON.parse(this.state.orderBy);
         console.log("orderArr: ", ...orderArr);
         //two seperate strings with rest first arr u need and second prop
         const orderedFuncs = orderBy(filteredFuncs, ...orderArr);
         this.setState({ displayedFuncs: orderedFuncs });
      }
   }
   changeOrder(e) {
      this.setState({ orderBy: e.target.value }, () => {
         this.filterFuncs();
      });
   }
   // after render
   // high num to low num shrt hand passing each object in array uiData comparing each order num with eachother use dot notation to sort by order
   render() {
      const getFunctionsNum = () => {
         return size(uiData);
      };

      return (
         <div className="container">
            <div className="row">
               <div className="col-12 col-lg-8 offset-lg-2 mb-5">
                  <h1 className="d-flex justify-content-center">
                     JavaScript Utility Library
                  </h1>
                  <p className="text-center lead mb-4">
                     {getFunctionsNum()}&nbsp;functions documented
                  </p>

                  <div className="custom-control custom-radio custom-control-inline">
                     <input
                        type="radio"
                        id="viewMode-all"
                        name="viewMode"
                        className="custom-control-input"
                        checked={!this.state.isFavoritesChecked}
                        onChange={(e) => {
                           this.filterFuncs(e);
                        }}
                     />
                     <label
                        className="custom-control-label"
                        htmlFor="viewMode-all"
                     >
                        Show all
                     </label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline ">
                     <input
                        type="radio"
                        id="viewMode-favorites"
                        name="viewMode"
                        className="custom-control-input"
                        checked={this.state.isFavoritesChecked}
                        onChange={(e) => {
                           this.filterFuncs(e);
                        }}
                     />
                     <label
                        className="custom-control-label"
                        htmlFor="viewMode-favorites"
                     >
                        Favorites
                     </label>
                  </div>
                  <div className="row mt-3">
                     <div className="col-6">
                        {/* onChange keep scope local pass it e change event fire anonymous function and call Filterfunc up above no binding needed*/}
                        <input
                           type="text"
                           className="form-control"
                           placeholder="Search all functions"
                           aria-label="Search all functions"
                           aria-describedby="search-input"
                           id="search-input"
                           onChange={(e) => {
                              this.filterFuncs(e);
                           }}
                        />
                     </div>
                     <div className="col-6">
                        <select
                           value={this.state.orderBy}
                           className=" form-control "
                           onChange={(e) => this.changeOrder(e)}
                        >
                           <option value='["order", "desc"]'>
                              Most recent
                           </option>
                           <option value='["order", "asc"]'>Oldest</option>
                           <option value='["name", "asc"]'>A - Z</option>
                           <option value='["name", "desc"]'>Z - A</option>
                        </select>
                     </div>
                  </div>
               </div>
               {this.state.displayedFuncs.map((functionUI) => {
                  const { name, desc, inputs } = functionUI;

                  //passing props

                  return (
                     <FunctionUI
                        key={name}
                        name={name}
                        desc={desc}
                        inputs={inputs}
                     />
                  );
               })}
            </div>
         </div>
      );
   }
}
