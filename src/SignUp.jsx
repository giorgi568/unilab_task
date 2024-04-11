import HeaderComponent from './HeaderComponent';
import FooterInfo from './FooterInfo';
import styles from './styles/SignUp.module.css';
import { useForm } from 'react-hook-form'; //library for handling forms
import { object, string, ref, mixed } from 'yup'; //library for form validation
import { yupResolver } from '@hookform/resolvers/yup'; //to integrate yup with react-hook-form
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const navigate = useNavigate();
  const [imageUrl, setImageUrl] = useState('');

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  let formSchema = object({
    fname: string()
      .required('this field is required')
      .min(5, 'first name must be 5 characters long'),
    lname: string()
      .required('this field is required')
      .min(5, 'first name must be 5 characters long'),
    email: string()
      .required('this field is required')
      .email('must be valid email'),
    password: string()
      .required('this field is required')
      .min(6, 'first name must be 6 characters long'),
    confirmPassword: string()
      .oneOf([ref('password'), null], 'passwords must match')
      .required('this field is required'),
    formImg: mixed().test(
      'fileType',
      'Only imgae files are allowed',
      (value) => {
        if (value[0]) {
          const fileType = value['0'].type;
          return fileType === 'image/png';
        }
        return true;
      }
    ),
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
    localStorage.setItem('status', true);
    localStorage.setItem('fname', JSON.stringify(data.fname));
    localStorage.setItem('lname', JSON.stringify(data.lname));
    localStorage.setItem('email', JSON.stringify(data.email));
    localStorage.setItem('password', JSON.stringify(data.password));
    const file = data.formImg['0'];
    // console.log(file);
    const reader = new FileReader();
    reader.onload = (event) => {
      const imageDataUrl = event.target.result;
      localStorage.setItem('image', imageDataUrl);
    };
    reader.readAsDataURL(file);
    navigate('/');
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
              id='fname'
              {...register('fname')}
              aria-invalid={errors.fname ? 'true' : 'false'}
            />
            {errors.fname && <p className='error'>{errors.fname.message} </p>}

            <label htmlFor='lname'>Last Name</label>
            <input
              type='text'
              placeholder='Enter your last name'
              id='lname'
              {...register('lname')}
              aria-invalid={errors.lname ? 'true' : 'false'}
            />
            {errors.lname && <p className='error'>{errors.lname.message} </p>}

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

            <label htmlFor='confirmPassword'>confirm the password</label>
            <input
              type='text'
              placeholder='Re-enter your password'
              id='confirmPassword'
              {...register('confirmPassword')}
              aria-invalid={errors.confirmPassword ? 'true' : 'false'}
            />
            {errors.confirmPassword && (
              <p className='error'>{errors.confirmPassword.message} </p>
            )}

            <label htmlFor='formImg' className={styles.imgLabel}>
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt=''
                  style={{ width: '70px', height: '70px', borderRadius: '50%' }}
                />
              ) : (
                <img src='./camera.svg' alt='' />
              )}
            </label>
            <input
              className={styles.img}
              type='file'
              id='formImg'
              onInput={handleFileInputChange}
              {...register('formImg')}
              aria-invalid={errors.formImg ? 'true' : 'false'}
            />
            {errors.formImg && (
              <p className='error'>{errors.formImg.message} </p>
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

export default SignUp;
