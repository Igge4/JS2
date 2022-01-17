import React, {useState} from 'react'
import validation from './validation';
const Form = () => {



    const [values, setValues] = useState ({
        firstname: "",
        lastname: "",
        email: "",
    })

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        })
    }

    const [errors, setErrors] = useState({});

    const handelFormSubmit = (event) => {
        event.preventDefault();
        setErrors(validation(values));
    }

    const error = {
        color: 'red',
        marginBottom: '5px',
        marginTop: '-25px',
        fontSize: '14px'
    }
    return (
        <div class="row"> 
        <h3>Add new customer</h3>
                    <form class="form">
                        <div class="col-12">
                             <input name="firstname" value={values.firstname} type="text" placeholder = "First name: " onChange={handleChange} />     
                             {errors.firstname && <p style={error}> {errors.firstname} </p>}
                        </div>
                        <div class="col-12">
                             <input name="lastname"value={values.lastname} type="text" placeholder = "Last name: " onChange={handleChange} />
                             {errors.lastname && <p style={error}> {errors.lastname}</p>}
                        </div>
                        <div class="col-12">
                            <input name="email" value={values.email} type="email" placeholder = "Email adress:" onChange={handleChange} />
                            {errors.email && <p style={error}> {errors.email}</p>}
                        </div>
                        <button class = "button" id="button" type='submit' onClick={handelFormSubmit}>Submit </button>
                    </form>
                </div>
    )
}

export default Form