import React, {useEffect, useState} from 'react';
import Chart from '../Chart/Chart';
import Cards from '../Cards/Cards';
import { fetchData } from '../../api/index';
import styles from './home.module.css';
import Footer from '../Footer/footer';

const Index = () => {
    const [data,setData] = useState({})
    useEffect(
      () => {
        async function fetchdata(){
          const response = await fetchData()
          setData({ ...response });
        }
        fetchdata()
      },
    [])
    return (


      <div className={styles.container}>

        <p className={styles.para}>
          <h1>Namaste 🙏</h1>
        
        Plasma Donation Web Application is build by our team in order to help people receiving and donating plasma easily
        and we have built this project to learn the applications of development. With the claims regarding the success of 
        plasma therapy having already been made by the government, our team motivates and encourages the cured people to donate plasma. 
        The smallest act of kindness is worth more than grandest intention.
          
        </p>
        <div className={styles.currentState}>Current Covid-19 state in India</div>
        <Cards data={data} />
        <Chart data={data} /><br/><br/><br/><br/><br/><br/>
        <Footer/>
      </div>
    
    )
}

export default Index;
