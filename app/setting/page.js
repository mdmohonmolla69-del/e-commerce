import React from 'react'
import Footer from '../components/Footer'
import SettingFotter from '../components/SettingFotter'

export const metadata = {
  title: 'Settings - Manage Your Shopico Account & Preferences',
  description: 'Manage your Shopico account securely. Update personal details, change passwords, control notifications, and configure privacy settings easily in one place.',
};

const setting = () => {
  return (
    <div className='h-[71vh]  w-full flex flex-col items-center'>
      <h1>Working Progress</h1>
      <SettingFotter />
      
    </div>
  )
}

export default setting
