import {React, useState} from 'react'
import './Todo.css'

export default function Todo() {

 const [inputData, setInputData] = useState('');  

    return (
        <div>
               <div className=" d-flex justify-content-center mt-5 ">
   
   <div className="page-content page-container mt-5" id="page-content">
    <div className="padding">
        <div className="row container d-flex justify-content-center">
            <div className="col-md-12">
                <div className="card px-3">
                    <div className="card-body">
                        <h4 className="card-title"> Todo list</h4>
                        <div className="add-items d-flex"> 
                        <input value={inputData}  onChange={(event)=> setInputData(event.target.value)}
                         type="text" className="form-control todo-list-input" placeholder="What do you need to do today?"/>
                        
                         <button onClick="" className="add btn btn-primary font-weight-bold todo-list-add-btn">Add</button>
                         
                          </div>
                        
                        <div className="list-wrapper mt-4">
                            <ul className="d-flex flex-column-reverse todo-list">
                                <li>
                                    <div className="form-check"> <label className="form-check-label"> <input className="checkbox" type="checkbox"/> For what reason would it be advisable. <i className="input-helper"></i></label> </div> <i className="remove mdi mdi-close-circle-outline"></i>
                                </li>
                                <li className="completed">
                                    <div className="form-check"> <label className="form-check-label"> <input className="checkbox" type="checkbox" checked=""/> For what reason would it be advisable for me to think. <i className="input-helper"></i></label> </div> <i className="remove mdi mdi-close-circle-outline"></i>
                                </li>
                                <li>
                                    <div className="form-check"> <label className="form-check-label"> <input className="checkbox" type="checkbox"/> it be advisable for me to think about business content? <i className="input-helper"></i></label> </div> <i className="remove mdi mdi-close-circle-outline"></i>
                                </li>
                                <li>
                                    <div className="form-check"> <label className="form-check-label"> <input className="checkbox" type="checkbox"/> Print Statements all <i className="input-helper"></i></label> </div> <i className="remove mdi mdi-close-circle-outline"></i>
                                </li>
                                <li className="completed">
                                    <div className="form-check"> <label className="form-check-label"> <input className="checkbox" type="checkbox" checked=""/> Call Rampbo <i className="input-helper"></i></label> </div> <i className="remove mdi mdi-close-circle-outline"></i>
                                </li>
                                <li>
                                    <div className="form-check"> <label className="form-check-label"> <input className="checkbox" type="checkbox"/> Print bills <i className="input-helper"></i></label> </div> <i className="remove mdi mdi-close-circle-outline"></i>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>

        </div>
    )
}
