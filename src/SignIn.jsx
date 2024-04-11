import HeaderComponent from './HeaderComponent';
import FooterInfo from './FooterInfo';
import styles from './styles/SignUp.module.css'; //signUp and signIn share lot of same styles
import { useForm } from 'react-hook-form'; //library for handling forms
import { object, string } from 'yup'; //library for form validation
import { yupResolver } from '@hookform/resolvers/yup'; //to integrate yup with react-hook-form
import { useNavigate } from 'react-router-dom';


let formSchema = object({
  email: string().test('match email', 'Incorrect Email', (value) => {
    if (value) {
      const validEmail = localStorage.getItem('email');
      return value === validEmail.slice(1, -1); //because localstorage returns string with " in begining and end and thus this comparison fails --- word === "word"
    }
    return false;
  }),
  password: string().test('match password', 'Incorrect password', (value) => {
    if (value) {
      const validPassword = localStorage.getItem('password');
      return value === validPassword.slice(1, -1);
    }
    return false;
  }),
});

function SignIn() {
  const navigate = useNavigate();
  
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    localStorage.setItem('status', true);
    navigate('/')
  };

  return (
    <div className={styles.content}>
      <HeaderComponent position='static' />
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <form
            action=''
            onSubmit={handleSubmit(onSubmit)}
            className={styles.form}
          >
            <label htmlFor='email'>Email</label>
            <input
              type='text'
              placeholder='Enter your email address'
              id='email'
              {...register('email')}
              aria-invalid={errors.email ? 'true' : 'false'}
            />
            {errors.email && <p className='error'>{errors.email.message} </p>}

            <label htmlFor='password'>Password</label>
            <input
              type='text'
              placeholder='Enter your password'
              id='password'
              {...register('password')}
              aria-invalid={errors.password ? 'true' : 'false'}
            />
            {errors.password && (
              <p className='error'>{errors.password.message} </p>
            )}

            <button className={styles.btn} type='submit'>
              Continue
            </button>
          </form>

          <div className={styles.line}>
            <hr className={styles.hr} />
            <span className={styles.text}>Or continue with</span>
            <hr className={styles.hr} />
          </div>
          <div className={styles.logos}>
            <div className={styles.logo}>
              <img src='./companies/facebook.svg' alt='facebook' />
            </div>
            <div className={styles.logo}>
              <img src='./companies/apple.svg' alt='apple' />
            </div>
            <div className={styles.logo}>
              <img src='./companies/gmail.svg' alt='gmail' />
            </div>
            <div className={styles.logo}>
              <img src='./companies/google.svg' alt='google' />
            </div>
          </div>
          <hr />
          <p>
            By signing in or creating an account, you agree with our Terms &
            conditions and Privacy policy
          </p>
        </div>
      </div>
      <FooterInfo />
    </div>
  );
}

export default SignIn;
