import React from "react";
import './AppDemo.scss';
import { adddemoservices } from "./AppDemoServices";
import { AppDemoChildClassComponent, AppDemoChildFunctionComponent } from "./AppDemoChildComponent";
import OutsideClickHandler from 'react-outside-click-handler';
export default class AppDemoClassComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            enable: false,
            selectedlist:[],
            enableList: [
                {name:"React",value:"HI HIn knsklazx lknsdk m, mnlkmcx,m kns;dokl,mc kjndlksm, cnklmds, c klmdslkmlkm,x nsk", isenabled: false},
                {name:"Angular",value:"HI HIn knsklazx lknsdk m, mnlkmcx,m kns;dokl,mc kjndlksm, cnklmds, c klmdslkmlkm,x nsk",isenabled: false},
                {name:"Vue",value:"HI HIn knsklazx lknsdk m, mnlkmcx,m kns;dokl,mc kjndlksm, cnklmds, c klmdslkmlkm,x nsk",isenabled: false},
                {name:"Nextjs",value:"HI HIn knsklazx lknsdk m, mnlkmcx,m kns;dokl,mc kjndlksm, cnklmds, c klmdslkmlkm,x nsk",isenabled: false},
                {name:"Node",value:"HI HIn knsklazx lknsdk m, mnlkmcx,m kns;dokl,mc kjndlksm, cnklmds, c klmdslkmlkm,x nsk",isenabled: false},
                {name:"Express",value:"HI HIn knsklazx lknsdk m, mnlkmcx,m kns;dokl,mc kjndlksm, cnklmds, c klmdslkmlkm,x nsk",isenabled: false}
            ],
            childList : [
                {id:"1",comp: <AppDemoChildClassComponent msg="HI!" col="green"/> },
                {id:"2",comp: <AppDemoChildFunctionComponent msg="BYE..." col="red"/> }
            ],
        }
    }

    componentDidMount(){
        let msg = adddemoservices.getwelcome() + "class component";
        console.log("Welcome Message",msg);
    }

    handleCheckCLick = async (index) => {
        const { enableList } = this.state;

        let enableListtemp = enableList;
        let selectedlisttemp = [];
        enableListtemp[index].isenabled = !enableListtemp[index].isenabled;
        for(let tmp_ind=0;tmp_ind<enableListtemp?.length; tmp_ind++){
            if(enableListtemp[tmp_ind].isenabled){
                selectedlisttemp.push(enableListtemp[tmp_ind].name)
            }
        }
        await this.setState({
            enableList: enableListtemp,
            selectedlist: selectedlisttemp
        });
    }

    render(){
        const { enable, enableList, selectedlist } = this.state;
        return(
            <>
                <div className="dropdown">
                    <div className="dropdown_btn" onClick={(e) => {this.setState({enable: !enable})}}>
                        {
                            selectedlist?.length > 0 ?  selectedlist.join(",") : "Choose a source"
                        }
                        <button className="dropdown_btn_toggle"></button>
                    </div>
                    {
                        enable &&
                        <OutsideClickHandler onOutsideClick={(e)=> this.setState({enable: false})}>
                            <div className="dropdown_content">
                                {
                                    enableList?.length > 0 &&
                                    enableList?.map((drop_ele, index) => {
                                        return (
                                            <div key={index} className={`dropdown_item ${drop_ele["isenabled"] ? "dc_active" : ""}`} onClick={(e) => this.handleCheckCLick(index)}>
                                                <div className="checkbox_input">
                                                    <input type="checkbox" checked={drop_ele["isenabled"]}/>
                                                </div>
                                                <div className='checkbox_text'>
                                                    {drop_ele["name"]}
                                                    <p>{drop_ele["value"]}</p>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </OutsideClickHandler>
                    }
                    </div>
            </>
        )
    }
}
