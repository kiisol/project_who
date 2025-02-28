import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ThemeSwitcher.module.scss'
import { Theme, useTheme } from 'app/providers/ThemeProvider/ui'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import { Button, ThemeButon } from 'shared/ui/Button/Button'


interface ThemeSwitcherProps {
    className?:string,
}
export const ThemeSwitcher = ({className}:ThemeSwitcherProps) => {
  const {theme, toggleTheme} = useTheme() 
  
  return (
      <Button theme={ThemeButon.CLEAR} className={classNames(cls.ThemeSwitcher, {}, [className])}
      onClick={toggleTheme}
      >
       {theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
      </Button>
  )
}
