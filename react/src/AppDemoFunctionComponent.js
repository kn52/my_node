import React, { useEffect } from "react";
import './AppDemo.scss';
import { adddemoservices } from "./AppDemoServices";
import $ from 'jquery';

export default function AppDemoFunctionComponent() {

    const [tab, setTab] = React.useState(1);

    useEffect(()=>{
        let msg = adddemoservices.getwelcome() + "function component";
        console.log("Welcome Message",msg);
    },[])

    const handlelist = (li_val) => {
        if (li_val < 7 && li_val > 0) {
            if (tab != li_val) {
                setTab(li_val);
            }

            var list = $("#ullist");

            if (list.length > 0) {
                var l1 = list[0].childNodes;

                if (l1.length > 0) {
                    var l2 = (tab - 1 > -1) ? l1[tab - 1].childNodes : [];
                    var l3 = (li_val - 1 > -1) ? l1[li_val - 1].childNodes : [];

                    if (l2.length > 0 && tab > 0) {
                        var l4 = l2[0];
                        l4.style.color = "blue";
                    }
                    if (l3.length > 0 && tab < 7) {
                        var l5 = l3[0];
                        l5.style.color = "red";
                    }
                }
            }
        }
        else {
            return;
        }
    }

    return (
        <>
           <ul id="ullist">
               <li>
                   <div onClick={(e) => handlelist(1)}>A</div>
                </li>
               <li>
                   <div onClick={(e) => handlelist(2)}>B</div>
                </li>
               <li>
                   <div onClick={(e) => handlelist(3)}>C</div>
                </li>
               <li>
                   <div onClick={(e) => handlelist(4)}>D</div>
                </li>
               <li>
                   <div onClick={(e) => handlelist(5)}>E</div>
                </li>
               <li>
                   <div onClick={(e) => handlelist(6)}>F</div>
                </li>
           </ul>
        </>
    );
}
