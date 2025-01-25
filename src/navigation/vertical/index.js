// ** Icon imports
import Login from 'mdi-material-ui/Login'
import Table from 'mdi-material-ui/Table'
import CubeOutline from 'mdi-material-ui/CubeOutline'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import FormatLetterCase from 'mdi-material-ui/FormatLetterCase'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'
import AccountPlusOutline from 'mdi-material-ui/AccountPlusOutline'
import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline'
import GoogleCirclesExtended from 'mdi-material-ui/GoogleCirclesExtended'

const navigation = () => {
  return [
    {
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/',
      permission:true

    },
    {
      title: 'Account Settings',
      icon: AccountCogOutline,
      path: '/account-settings',
      permission:true

    },
    {
      sectionTitle: 'Pages',
      permission:true
    },
    {
      title: 'Login',
      icon: Login,
      path: '/pages/login',
      // openInNewTab: true
    },
    {
      title: 'Register',
      icon: AccountPlusOutline,
      path: '/pages/register',
      // openInNewTab: true
    },
    {
      title: 'Appointment',
      icon: AccountPlusOutline,
      path: '/appointment',
      // openInNewTab: true
      permission:true
    },
    {
      title: 'Error',
      icon: AlertCircleOutline,
      path: '/pages/error',
      // openInNewTab: true
      permission:true

    },
    {
      sectionTitle: 'User Interface',
      permission:true
    },
    {
      title: 'Typography',
      icon: FormatLetterCase,
      path: '/typography',
      permission:true
    },
    {
      title: 'Icons',
      path: '/icons',
      icon: GoogleCirclesExtended,
      permission:true
    },
    {
      title: 'Cards',
      icon: CreditCardOutline,
      path: '/cards',
      permission:true
    },
    {
      title: 'Tables',
      icon: Table,
      path: '/tables',
      permission:true
    },
    {
      icon: CubeOutline,
      title: 'Form Layouts',
      path: '/form-layouts',
      permission:true
    }
  ].filter((item) => item.permission);
}

export default navigation
