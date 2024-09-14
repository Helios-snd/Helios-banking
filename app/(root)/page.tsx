import React from 'react'
import HeaderBox from '@/components/ui/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox';
import RightSidebar from '@/components/ui/RightSidebar';

const Home= () => {
const loggedin = { firstName: 'Sandip',lastName: 'Dey', email:'sandip.dey1307@gmail.com'};

  return (
    <section className='home'>
    <div className="home-content">
      <header className="home-header">
        <HeaderBox
        type="greeting"
        title="Welcome"
        user= {loggedin ?.firstName || "guest"}
        subtext = "Access and manage your account and transactions efficiently."
        />

        <TotalBalanceBox
        accounts ={[]}
        totalBanks={1}
        totalCurrentBalance = {130720030000.52}
        />
     
      </header>

      RECENT TRANSACTIONS
    </div>

    <RightSidebar 
    user={loggedin}
    transactions ={[]}
    banks={[{currentBalance: 500089.74}, {currentBalance: 120089.74}]} />
      </section>
  )
}

export default Home