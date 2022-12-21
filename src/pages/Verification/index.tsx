import axios from 'axios';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

export default function Verification() {
  const [isVerified, setIsVerified] = useState(false);
  useEffect(() => {
    async function verify() {
      try {
        const url = `${import.meta.env.VITE_DB_SERVER}verification`;
        const urlArr = window.location.pathname.split('/');
        const userId = urlArr[urlArr.length - 1];
        const { data } = await axios.post(url, { userId });
        if (data === 'success') setIsVerified(true);
      } catch (err) {
        console.log(err);
      }
    }
    verify();
  });

  return <>{isVerified && <Navigate to="/signin"></Navigate>}</>;
}
