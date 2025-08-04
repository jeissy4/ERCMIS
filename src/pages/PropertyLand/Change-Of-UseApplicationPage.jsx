import React ,{Component} from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./CAP.css"


export default class ChangeOfUseApplicationPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            applicantName: "",
            nationalID: "",
            contact: "",
            propertyAddress: "",
            proposedUsed: "",
            applicationDate: "",
            status: "pending"
            

        };
    }
    handleSubmit = (event) => {
        event.preventDefault();
        toast.success("Change of use application Submitted Successfully!");
    }
    render () {
    return(
        <div className="main-content">
        <div className="ChangeOfUseApplication">
         <h2>Change of Use Application</h2>
         <p>This component allows users to submit applications to change the use of a property (e.g., from residential to commercial), and also lists existing applications.</p>
         <form onSubmit={this.handleSubmit}>
            <div>
                <label>Applicant Name</label>
                 <input type="text" value={this.state.applicantName} onChange={(e) => this.setState({applicantName: e.target.value})} required/>
            </div>

            <div>
                <label>National ID</label>
                 <input type="number" value={this.state.nationalID} onChange={(e) => this.setState({nationalID: e.target.value})} required/>
            </div>

             <div>
                <label>Contact</label>
                 <input type="number" value={this.state.contact} onChange={(e) => this.setState({contact: e.target.value})} required/>
            </div>

            <div>
                <label>Property Address</label>
                 <input type="text" value={this.state.propertyAddress} onChange={(e) => this.setState({propertyAddress: e.target.value})} required/>
            </div>

            <div>
                <label>Proposed Use</label>
                 <input type="text" value={this.state.proposedUsed} onChange={(e) => this.setState({proposedUsed: e.target.value})} required/>
            </div>

            <div>
                <label>Application Date</label>
                 <input type="date" value={this.state.applicationDate} onChange={(e) => this.setState({applicationDate: e.target.value})} required/>
            </div>

             <div>
                <label>Status</label>
                 <input type="text" value={this.state.status} onChange={(e) => this.setState({status: e.target.value})} required/>
            </div>

            <button type = "submit">Pay with m-pesa</button>
         </form>


        </div>
        </div>
    )
}
}
