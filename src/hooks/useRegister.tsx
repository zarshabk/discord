import toast from 'react-hot-toast';
import axios from 'axios';
import { useState } from 'react';

const useRegister = () => {
  const [loading, setLoading] = useState(false);

  const registerUser = async (data: any) => {
    setLoading(true);
    try {
      const resp = await axios.post('/api/user/', data);
      setLoading(false);
      return resp.data;
    } catch (error) {
      setLoading(false);
      return toast.error(error?.response?.data?.message);
    }
  };

  return { loading, registerUser };
};

export default useRegister;
