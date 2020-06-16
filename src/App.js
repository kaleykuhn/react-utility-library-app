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
   }

   // after render
   /*  high num to low num shrt hand passing each object in array uiData comparing each order num with eachother use dot notation to sort by order */
   render() {
      const orderedData = orderBy(uiData, "name", "asc");

      const getFunctionsNum = () => {
         return size(uiData);
      };

      return (
         <div className="container">
            <div className="row">
               <div className="col-12">
                  <h1 className="d-flex justify-content-center">
                     JavaScript Functions: Basic
                  </h1>
                  <p className="text-center lead mb-4">
                     {getFunctionsNum()}&nbsp;functions documented
                  </p>
               </div>
               {orderedData.map((functionUI) => {
                  const { name, desc, inputs } = functionUI;

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
