//library import
import { useState } from 'react';

//file import

//CSS import
import './Girokonto.css';

const Girokonto = () => {
    const [money,setMoney] = useState(0);

    const [newMoney,setNewMoney] = useState(0);

    //function deposit money
    const handleDeposit = (event) =>{
        event.preventDefault();
        setMoney(prevMoney => prevMoney + parseInt(newMoney))
    }

    // function withdraw money
    const handleWithdraw = (event) =>{
        event.preventDefault();
        setMoney(prevMoney => prevMoney - parseInt(newMoney))
    }

    return ( 
        <section className='bankaccount'>
            <h2>Your account</h2>
            <article>
                <div className='overview'>
                    <p id='balance'>{money}€</p>
                    <p>Available balance</p>
                </div>
                <form>
                    <input type="number" onChange={(e) => setNewMoney(e.target.value)}/>
                    <button onClick={handleDeposit}>Deposit</button>
                    <button onClick={handleWithdraw}>Withdraw</button>
                </form>
            </article>
        </section>
    );
}

export default Girokonto;