import React from "react";
import "./style/master.scss"; //applies global scss styles
import { uiData } from "./data/ui";
import FunctionUI from "./components/FunctionUI";

// this is a pre-built class given name App adding into component before render
export default class App extends React.Component {
   constructor() {
      super();
      console.log(uiData);
   }

   // after render
   render() {
      return (
         <div className="container">
            <div className="row">
               {uiData.map((functionUI) => {
                  return (
                     <FunctionUI
                        name={functionUI.name}
                        desc={functionUI.desc}
                        inputs={functionUI.inputs}
                     />
                  );
               })}
            </div>
         </div>
      );
   }
}
