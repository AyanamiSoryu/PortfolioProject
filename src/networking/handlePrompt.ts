import axios from 'axios';

import generateUniqClientKey from '../utils/generateUniqClientKey/generateUniqClientKey';

const handlePrompt = async (prompt: string) => {
  try {
    const clientKey = generateUniqClientKey();
    const serverURL = process.env.SERVER_URL || 'https://portfolio-server-eight-ashy.vercel.app';

    const response = await axios.post(`${serverURL}/api/gemini`, {
      prompt,
      clientKey
    });

    return response.data.response;
  } catch (err: unknown) {
    console.log('Error', err);

    if (typeof err === 'object' && err !== null && 'response' in err) {
      const errorResponse = err as { response: { data?: any; status?: number } };

      if (errorResponse.response.status === 429) {
        const resetTime = new Date(errorResponse.response.data?.resetTime);
        return `Request limit exceeded. try later ${resetTime.toLocaleString()}`;
      }

      return errorResponse.response.data?.error || 'Error in query response src/networking/geminiQuery.ts';
    }
    return 'Cannot reach server';
  }
};

export default handlePrompt;
