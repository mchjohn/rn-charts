import { View } from 'react-native';
import { useEffect } from 'react';

import { LineChar } from '../../components/LineChart';

import { getDollarPeriod } from '../../api/ptax';

export function Home() {
  async function onDollarPeriod() {
    try {
      const dollar = await getDollarPeriod({ initialDate: '08-01-2023', finalDate: '08-05-2023' });

      console.log('Resposta: ', dollar);
    } catch (error) {
      console.error(JSON.stringify(error));
    }
  }

  useEffect(() => {
    onDollarPeriod();
  }, []);

  return (
    <View>
      <LineChar />
    </View>
  );
}
