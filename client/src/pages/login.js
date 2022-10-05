import React from 'react'


function login() {
  return (
    <div className="form"> 
        <div className="form-body">
            <div className="username">
                <label className="form__label" for="userName">User Name </label>
                <input className="form__input" type="text" id="userName" placeholder="User Name"/>
            </div>
            <div className="password">
                <label className="form__label" for="password">Password </label>
                <input className="form__input" type="password"  id="password" placeholder="Password"/>
            </div>
        </div>
        <div class="footer">
            <button type="submit" class="btn">Register</button>
        </div>
    </div>      
    )
}

export default login