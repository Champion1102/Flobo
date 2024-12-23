import { Box, Button, TextField } from '@mui/material'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import LoadingButton from '@mui/lab/LoadingButton'
import authApi from '../api/authApi'

const Signup = () => {
  const navigate = useNavigate()

  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrors({ email: '', username: '', password: '', confirmPassword: '' })

    const formData = new FormData(e.target)
    const email = formData.get('email').trim()
    const username = formData.get('username').trim()
    const password = formData.get('password').trim()
    const confirmPassword = formData.get('confirmPassword').trim()

    const newErrors = {}
    if (!email) newErrors.email = 'Please fill this field'
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Invalid email address'

    if (!username) newErrors.username = 'Please fill this field'
    if(username.length < 8) newErrors.username ='Username must be at least 8 characters'
    if (!password) newErrors.password = 'Please fill this field'
    if (!confirmPassword) newErrors.confirmPassword = 'Please fill this field'
    if (password && confirmPassword && password !== confirmPassword) {
      newErrors.confirmPassword = 'Confirm password does not match'
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setLoading(true)

    try {
      const res = await authApi.signup({ email, username, password,confirmPassword })
      localStorage.setItem('token', res.token)
      navigate('/')
    } catch (err) {
      const serverErrors = err?.errors || []
      console.log(serverErrors)
      const apiErrors = {}
      serverErrors.forEach(({ param, msg }) => {
        apiErrors[param] = msg
      })
      setErrors(apiErrors)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Box component="form" sx={{ mt: 1 }} onSubmit={handleSubmit} noValidate>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email"
          name="email"
          disabled={loading}
          error={!!errors.email}
          helperText={errors.email}
          aria-describedby="email-helper"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="username"
          label="Username"
          name="username"
          disabled={loading}
          error={!!errors.username}
          helperText={errors.username}
          aria-describedby="username-helper"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="password"
          label="Password"
          name="password"
          type="password"
          disabled={loading}
          error={!!errors.password}
          helperText={errors.password}
          aria-describedby="password-helper"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="confirmPassword"
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          disabled={loading}
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword}
          aria-describedby="confirm-password-helper"
        />
        <LoadingButton
          sx={{ mt: 3, mb: 2 }}
          variant="outlined"
          fullWidth
          color="success"
          type="submit"
          loading={loading}
        >
          Signup
        </LoadingButton>
      </Box>
      <Button component={Link} to="/login" sx={{ textTransform: 'none' }}>
        Already have an account? Login
      </Button>
    </>
  )
}

export default Signup
