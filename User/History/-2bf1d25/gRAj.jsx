import React from 'react'
import { useForm } from './hooks/useForm'

export const FormWithCustomHook = () => {

  const {usernamex, emailx, passwordx, form, onInputChange, onReset} = useForm({
    username: '',
    email:    '',
    password: ''
  });

  return (
    <div>
      <h1>Form with custom hook</h1>
      <hr />
      <form>
        <div className="form-group">
          <label htmlFor="username">Usuario</label>
          <input type="text"
            name="username"
            className="form-control form-control-sm"
            value={usernamex}
            onChange={ onInputChange }
            placeholder='username' />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo</label>
          <input type="email"
            name="email"
            className="form-control form-control-sm"
            value={emailx}
            onChange={ onInputChange }
            placeholder='email' />
        </div>
        <div className="form-group">
          <label htmlFor="password">Clave</label>
          <input type="password"
            name="password"
            className="form-control form-control-sm"
            value={passwordx}
            onChange={ onInputChange }
            placeholder='password' />
        </div>
        <button className="btn btn-sm btn-danger mt-3" 
          type="button"
          onClick={ onReset }>
          Borrar
        </button>
      </form>
    </div>
  )
}
