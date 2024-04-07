import styles from '../styles/bookTrip.module.css';

function BookTrip() {
  return (
    <div className={styles.content}>
      <h3>Ready To Book A Trip?</h3>
      <form className={styles.form} action=''>
        <fieldset className={styles.fieldset}>
          <select name='location' id='location'>
            <option value='' defaultChecked>
              Your starting location
            </option>
            <option value='Georgia'>Georgia</option>
            <option value='Brazil'>Brazil</option>
            <option value='Austria'>Austria</option>
            <option value='Germany'>Germany</option>
            <option value='Poland'>Poland</option>
            <option value='Peru'>Peru</option>
          </select>
          <select name='tour' id='tour'>
            <option value='' defaultChecked>
              Choose a tour offer
            </option>
            <option value='Georgia'>Georgia</option>
            <option value='Brazil'>Brazil</option>
            <option value='Austria'>Austria</option>
            <option value='Germany'>Germany</option>
            <option value='Poland'>Poland</option>
            <option value='Peru'>Peru</option>
          </select>
          <select name='date' id='date'>
            <option value='' defaultChecked>
              Choose Date
            </option>
            <option value='7'>7 April</option>
            <option value='8'>8 April</option>
            <option value='9'>9 April</option>
            <option value='10'>10 April</option>
            <option value='11'>11 April</option>
            <option value='12'>12 April</option>
          </select>
          <select name='persons' id='persons'>
            <option value='' defaultChecked>
              Persons
            </option>
            <option value='7'>7 person</option>
            <option value='8'>8 person</option>
            <option value='9'>9 person</option>
            <option value='10'>10 person</option>
            <option value='11'>11 person</option>
            <option value='12'>12 person</option>
          </select>
        </fieldset>
        <button className={styles.btn} onClick={(e)=> {e.preventDefault()}}>Book Now</button>
      </form>
    </div>
  );
}

export default BookTrip;
