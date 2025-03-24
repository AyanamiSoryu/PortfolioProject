const generateUniqClientKey = () => {
  const storedKey = localStorage.getItem('clientKey');
  if (storedKey) {
    return storedKey;
  }

  const newKey = `client_${Date.now()}_${Math.random().toString(36).substring(2, 15)}`;
  localStorage.setItem('clientKey', newKey);
  return newKey;
};

export default generateUniqClientKey;
