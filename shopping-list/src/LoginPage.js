import React from 'react'
import axios from 'axios'
import ErrorAlert from './ErrorAlert'

const background =
  'w-100 vh-100 bg-light-gray flex justify-center pa4 sans-serif'
const content = 'w-50 bg-white br3 ba b--moon-gray'
const header = 'pa3 f3 fw6 bb b--moon-gray purple'

const form = 'w-50 center pa3'
const input = 'w-100 br3 f5 pa2 b--solid b--moon-gray outline-0 flex-auto mb2'
const button =
  'f5 bg-purple white br3 b--none pv2 pointer hover-bg-light-purple w-50 db center'

class LoginPage extends React.Component {
  state = {
    login: '',
    password: '',
    shouldShowError: false,
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  goToList = async () => {
    const { login, password } = this.state
    this.setState({ shouldShowError: false })
    const res = await axios.post('http://localhost:8080/login', {
      login,
      password,
    })

    if (!res.data.ok) return this.setState({ shouldShowError: true })

    localStorage.setItem('token', res.data.token)
    this.props.history.push('/list')
  }

  render() {
    const { login, password, shouldShowError } = this.state

    return (
      <div className={background}>
        <main className={content}>
          <header className={header}>Lista de Compras</header>
          <form className={form}>
            <input
              type="text"
              placeholder="Login"
              name="login"
              className={input}
              value={login}
              onChange={this.handleChange}
            />
            <input
              type="password"
              placeholder="Senha"
              name="password"
              className={input}
              value={password}
              onChange={this.handleChange}
            />
            <button type="button" className={button} onClick={this.goToList}>
              Login
            </button>
          </form>
          {shouldShowError ? <ErrorAlert /> : null}
        </main>
      </div>
    )
  }
}

export default LoginPage
