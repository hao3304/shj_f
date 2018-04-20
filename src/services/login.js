import instance from './index'

export const Login = params=> instance.post('/login', params)
