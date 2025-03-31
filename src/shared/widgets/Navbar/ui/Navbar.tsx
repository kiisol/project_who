import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { AppLinkTheme, AppLink  } from 'shared/ui/AppLink/AppLink'


//интерфейс который будет описывать пропсы - который Navbar
//ожидает на вход
interface NavbarProps {
    className?:string,
}

export const Navbar = ({className}:NavbarProps) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
        <div className={cls.links}>
            <AppLink 
            theme={AppLinkTheme.SECONDARY} 
            className={cls.mainLink} 
            to={'/'}
            >Главная</AppLink>
            <AppLink 
            theme={AppLinkTheme.SECONDARY} 
            to={'/about'}
            >О нас</AppLink>
        </div>
    </div>
  )
}

export default Navbar
