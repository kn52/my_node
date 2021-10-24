import React from 'react';
import {Modal} from 'semantic-ui-react';
import './ModalComp.scss';

class ModalComp extends React.Component {

    constructor(props){
        super(props);
        this.state={
            open:false
        }
    }

    handleOpen = () =>{
        this.setState({open:true});
    }

    handleClose = () =>{
        this.setState({open:false});
    }
    

    componentDidMount(){
        // localStorage.getItem("password") === null && window.location.replace("/"); 
    }
    
    render(){
        return(
         <>
                <button type="button" onClick={this.handleOpen}>
                    Open Modal
                </button>
                <Modal open={this.state.open} size={'tiny'} dimmer={'blurring'}
                className="cstyle"
           >
            <Modal.Header className='text-center'>
                <p>Kindly scan the QR code to make the payment.</p>
            </Modal.Header>
            <Modal.Content className='text-center'>
                <div>
                    "HI"
                    {/* <QRCode size='200' value={props.QRCodeUrl} /> */}
                    {/* <p style={{ fontWeight:'900', paddingTop:'19px',wordBreak:'break-word'}}>
                      {props.QRCodeUrl}
                    </p> */}
                </div>
            </Modal.Content>
            <Modal.Actions>
                {/* <Button style={{ backgroundColor: '#2661a8', color: '#fff', height: '37px', width: '100px' }}>
                    Close 
                </Button> */}
            </Modal.Actions>
        </Modal>
        </>
        )
    }
}

export default ModalComp