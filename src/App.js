import React, { Component } from "react";
import "./style/master.scss"; //applies global scss styles
import { uiData } from "./data/ui";

// this is a pre-built class given name App adding into component before render
export default class App extends Component {
   constructor() {
      super();
      console.log(uiData);
   }

   // after render
   render() {
      const renderInputs = (num) => {
         const inputs = [];
         for (let i = 0; i < num; i++) {
            //render some JSX
            inputs.push(
               <input type="text" className="form-control inline-action" />
            );
         }
         return inputs;
      };

      return (
         <div className="container">
            <div className="row">
               {uiData.map((component) => {
                  return (
                     <div className="col-12 col-lg-8 offset-lg-2 mb-5">
                        <p className="name">
                           <b>{component.name}</b>&nbsp;-&nbsp;{component.desc}
                        </p>
                        <pre style={{ display: "none" }}>
                           <code></code>
                        </pre>
                        <div className="actions float-right">
                           {renderInputs(component.inputs)}

                           <button className="btn btn-primary inline-action">
                              Run
                           </button>
                        </div>
                        <div className="clearfix mb-3"></div>
                        <div
                           className="alert alert-primary"
                           style={{ display: "none" }}
                        ></div>
                        <div
                           className="alert alert-danger"
                           style={{ display: "none" }}
                        ></div>
                     </div>
                  );
               })}
            </div>
         </div>
      );
   }
}
