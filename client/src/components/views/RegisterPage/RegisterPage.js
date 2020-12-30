import React from 'react'

function RegisterPage() {
    return (
        <div style = {{
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            width: '100%', height: '100vh'
          }}>
            <form style = {{ display: 'flex', flexDirection: 'column'}} onSubmit = { onSubmitHandler }>
                <label>Email</label>
                <input type = "email" value={Email} onChange={ onEmailHandler } />
                <label>Password</label>
                <input type = "password" value={Password} onChange = { onPasswordHandler } />

                <br />
                <button>
                    Login
                </button>
            </form>
        </div>
    )
}

export default RegisterPage
