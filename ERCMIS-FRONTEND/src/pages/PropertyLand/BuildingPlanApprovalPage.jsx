import React ,{Component} from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import  "./BPA.css"


export default class BuildingPlanApproval extends Component{
    constructor(props){
        super(props);
        this.state = {
            applicantName: "",
            nationalID: "",
            propertyAddress: "",
            planDescription: "",
            applicationDate: "",
            contact: ""

        };
    }
    handleSubmit = (event) => {
        event.preventDefault();
        toast.success("Building Plan Approval Submitted Successfully!");
    }
    render () {
    return(
        <div className="main-content">
        <div className="BuildingPlan">
         <h2>Building Approval</h2>
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
                <label>Plan Description</label>
                 <input type="text" value={this.state.planDescription} onChange={(e) => this.setState({planDescription: e.target.value})} required/>
            </div>

            <div>
                <label>Application Date</label>
                 <input type="date" value={this.state.applicationDate} onChange={(e) => this.setState({applicationDate: e.target.value})} required/>
            </div>

            <button type = "submit">Pay with m-pesa</button>
         </form>


        </div>
        </div>
    )
}
}
