import { Container, Box } from '@mui/material'
import { useState, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import authUtils from '../../utils/authUtils'
import Loading from '../common/Loading'
import assets from '../../assests'
import { useTheme } from '@mui/material/styles';

const AuthLayout = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const theme = useTheme()

  useEffect(() => {
    const checkAuth = async () => {
      const isAuth = await authUtils.isAuthenticated()
      if (!isAuth) {
        setLoading(false)
      } else {
        navigate('/')
      }
    }
    checkAuth()
  }, [navigate])

  if (loading) return <Loading fullHeight />

  return (
    <Container component="main" maxWidth="xs">
      <Box sx={{
        marginTop: 8,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}>
        <img 
          src={theme.palette.mode === 'dark' ? assets?.images?.logoDark : assets?.images?.logoLight || ''}
          style={{ width: '100px' }} 
          alt="App logo" 
        />
        <Outlet />
      </Box>
    </Container>
  )
}

export default AuthLayout
