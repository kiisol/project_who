import {Link } from 'react-router-dom'
import './styles/index.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from './providers/ThemeProvider/ui'
import { AppRouter } from './providers/router'
import { Navbar } from 'shared/widgets/Navbar'



const App = () => {
  const {theme, toggleTheme} = useTheme()
  
  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <AppRouter />
    </div>
  )
}

export default App
  