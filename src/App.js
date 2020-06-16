import React from "react";
import "./style/master.scss"; //applies global scss styles
import { uiData } from "./data/ui";
import FunctionUI from "./components/FunctionUI";
import orderBy from "lodash/orderBy";
import size from "lodash/size";

// this is a pre-built class given name App adding into component before render
export default class App extends React.Component {
   constructor() {
      super();
      console.log(uiData);
      this.state = {
         /*listOfThings: [], this would be mult things to set*/
         isFavoritesChecked: false,
         allFuncs: uiData,
         displayedFuncs: uiData,
      };
   }
   toggleFavorites(e) {
      //set this to the oppis of state above ! single exclamation means opposite
      this.setState({ isFavoritesChecked: !this.state.isFavoritesChecked });
      const userInput = e.target.id; //grabbing user input id
      console.log(userInput);
      const allFuncs = [...this.state.allFuncs]; // grabbing copy of all funcs with spread shallow copy
      if (userInput === "viewMode-favorites") {
         const filteredFuncs = allFuncs.filter((func) => {
            // run filter on copy where is favorite is true
            return func.isFavorite;
         });
         console.log(filteredFuncs); // expect a blank array in console
         this.setState({ displayedFuncs: filteredFuncs });
      } else {
         this.setState({ displayedFuncs: allFuncs });
      }
   }

   // after render
   /*  high num to low num shrt hand passing each object in array uiData comparing each order num with eachother use dot notation to sort by order */
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
                           this.toggleFavorites(e);
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
                           this.toggleFavorites(e);
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
                        <input
                           type="text"
                           className="form-control"
                           placeholder="Search all functions"
                           aria-label="Search all functions"
                           aria-describedby="search-input"
                           id="search-input"
                        />
                     </div>
                     <div className="col-6">
                        <select className=" form-control ">
                           <option>Most recent</option>
                           <option>Oldest</option>
                           <option>A - Z</option>
                           <option>Z - A</option>
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
