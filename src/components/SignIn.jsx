import HeaderComponent from './HeaderComponent';
import FooterInfo from './FooterInfo';
import styles from '../styles/SignUp.module.css'; //signUp and signIn share lot of same styles
import { useForm } from 'react-hook-form'; //library for handling forms
import { object, string, ref, mixed } from 'yup'; //library for form validation
import { yupResolver } from '@hookform/resolvers/yup'; //to integrate yup with react-hook-form


function SignIn() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(formSchema),
  });
  return(
    <div className={styles.content}>
      <HeaderComponent position='static' />

      <FooterInfo />
    </div>
  )
}

export default SignIn;
