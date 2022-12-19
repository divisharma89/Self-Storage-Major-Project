import React from 'react';
import {Formik} from 'formik';
import Swal from 'sweetalert2';

const AddLocation = () => {

    const userSubmit = async (formdata) => {
        console.log(formdata);

        // 1. url
        // 2. request method
        // 3. data
        // 4. data format

        // asynchronous function - returns promise
        const response = await fetch( 'http://localhost:5000/user/add', {
            method : 'POST',
            body : JSON.stringify(formdata),
            headers : {
                'Content-Type' : 'application/json'
            }
        })       
        console.log(response.status);
        
        if(response.status === 200){
            console.log('user data added!');
            Swal.fire({
                icon : 'success',
                title : 'Well Done',
                text : 'AddLocation Successfully'
            })
        }

        console.log('request sent');
    }
    
    return (
        <div className='container'>
            <div className="card">
                <div className="card-body">
                    <h3 className="text-center">AddLocation Here</h3>
                    <Formik
                        initialValues={{state: '', city: '', totalarea: '', occupied:'', lastupdated:'', type:''}}
                        onSubmit={userSubmit}
                        >
                    
                        {({values, handleSubmit, handleChange}) => (
                            <form onSubmit={handleSubmit}>
                            <label className='mt-5'>state</label>
                            <input className='form-control' id="state" onChange={handleChange} value={values.state} />
                            
                            <label className='mt-3'>city</label>
                            <input className='form-control' id="city" onChange={handleChange} value={values.city} />
                            
                            <label className='mt-3'>totalarea</label>
                            <input className='form-control' id="totalarea" onChange={handleChange} value={values.totalarea} />
                            
                            <label className='mt-3'>occupied</label>
                            <input className='form-control' id="occupied" onChange={handleChange} value={values.occupied} />
                               
                            <label className='mt-3'>lastupdated</label>
                            <input className='form-control' id="lastupdated" onChange={handleChange} value={values.lastupdated} />
                               
                            <label className='mt-3'>type</label>
                            <input className='form-control' id="type" onChange={handleChange} value={values.type} />
                                
                                <button type="submit" className='btn btn-primary mt-5'>Submit</button>
    
                        </form>
                        )}
                    </Formik>
                    
                </div>
            </div>
        </div>
    )

}

export default AddLocation