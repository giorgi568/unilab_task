import HeaderComponent from './HeaderComponent';
import FooterInfo from './FooterInfo';
import styles from '../styles/SignUp.module.css';
import { useForm } from 'react-hook-form';
import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

function SignUp() {
  let formSchema = object({
    fname: string()
      .required('this field is required')
      .min(5, 'first name must be 5 characters long'),
  });
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
            <label htmlFor='fname'>First Name</label>
            <input
              type='text'
              placeholder='Enter your first name'
              {...register('fname', { required: true, minLength: 5 })}
              aria-invalid={errors.fname ? 'true' : 'false'}
            />
            {errors.fname && <p className='error'>{errors.fname.message} </p>}
            <label htmlFor='lname'>Last Name</label>
            <input type='text' placeholder='Enter your last name' />
            <label htmlFor='email'>Email</label>
            <input type='text' placeholder='Enter your email address' />
            <label htmlFor='password'>Password</label>
            <input type='text' placeholder='Enter your password' />
            <label htmlFor='confirmPassowrd'>confirm the password</label>
            <input type='text' placeholder='Re-enter your password' />
            <label htmlFor='form-img' className={styles.imgLabel}>
              <img src='./camera.svg' alt='' />
            </label>
            <input className={styles.img} type='file' id='form-img' />
            <button className={styles.btn} type='submit'>Continue</button>
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

export default SignUp;
