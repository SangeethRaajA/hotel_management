import React, { useState } from "react";
import Layout from "../segment/Layout";
import { createRoom } from "../api/room.api";

const AddRoom = () => {

    const [values, setValues] = useState({
        code:"",
        amount:"",
        wing: "",
        pax: "",
        category: "",
        error: false,
        success: false
    });

    const { 
        code,
        amount,
        wing,
        pax,
        category,
        error, 
        success        
    } = values;

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    };

    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: false });
        //api call
        createRoom({code, amount, wing, pax, category}).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error, success: false });
            } else {
                setValues({
                    ...values,
                    code:"",
                    amount:"",
                    wing: "",
                    pax: "",
                    category: "",
                    error: "",
                    success: true
                });
            }
        });
    };

    // const showCheckout = () => {
    //     return isAuthenticated() ? (
    //         <div>{commentForm()}</div>            
    //     ) : (
    //         <Link to="/signin">
    //             <button className="btn btn-primary">View Comment</button>
    //         </Link>
    //     );
    // };

    const roomForm = () =>(
        <form className="form-group container ">

            <div className="form-group">
                <h5>Code</h5>                
                <textarea 
                    onChange={handleChange("code")}
                    type="text"
                    className="form-control"
                    value={code}
                    placeholder="Enter code"
                    required
                />                
            </div>

            <div className="form-group">
                <h5>Amount</h5>                
                <textarea 
                    onChange={handleChange("amount")}
                    type="text"
                    className="form-control"
                    value={amount}
                    placeholder="Enter amount"
                    required
                />                
            </div>

            <div className="form-group">
                <h5>Wing</h5>                
                <textarea 
                    onChange={handleChange("wing")}
                    type="text"
                    className="form-control"
                    value={wing}
                    placeholder="Enter wing"
                    required
                />                
            </div>

            <div className="form-group">
                <h5>Pax</h5>                
                <textarea 
                    onChange={handleChange("pax")}
                    type="text"
                    className="form-control"
                    value={pax}
                    placeholder="Enter pax"
                    required
                />                
            </div>            

            <div className="form-group">
                <h5>category</h5>                
                <textarea 
                    onChange={handleChange("category")}
                    type="text"
                    className="form-control"
                    value={category}
                    placeholder="Enter category"
                    required
                />                
            </div>
            <button className="btn btn-outline-primary float-right" onClick={clickSubmit}>Add Room</button>
        </form>
    );

    const showSuccess = () => {
        if (success) {
            return <h4 className="text-success">room is added</h4>;
        }
    };

    const showError = () => {
        if (error) {
            return <h4 className="text-danger">room not accepted</h4>;
        }
    };


    return (
        <Layout
            title="Add a new room"
            description={`G'day, ready to add a new room?`}
        >
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    {showSuccess()}
                    {showError()}
                    {roomForm()}
                </div>
            </div>
        </Layout>             
    );
};

export default AddRoom;