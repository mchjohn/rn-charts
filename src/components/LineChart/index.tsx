import { useState } from 'react';
import { AbstractChartConfig } from 'react-native-chart-kit/dist/AbstractChart';
import { Dimensions, Text, View } from 'react-native';
import { LineChart as LineCharKit } from 'react-native-chart-kit';

import { quotes } from '../../mocks/quotes';
import { formatDate } from '../../utils/formatedDate';

const screenWidth = Dimensions.get('window').width;

const chartConfig: AbstractChartConfig = {
  backgroundGradientFrom: '#370617',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: '#D00000',
  backgroundGradientToOpacity: 0.3,
  strokeWidth: 2,
  barPercentage: 0.5,
  useShadowColorFromDataset: true,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,

};

const dataLabels = quotes.value.map((quote) => quote.dataHoraCotacao);
const datasetsLabels = quotes.value.map((quote) => quote.cotacaoCompra);

const data = {
  labels: dataLabels,
  datasets: [
    {
      data: datasetsLabels,
      color: (opacity = 1) => `rgba(208, 0, 0, ${opacity})`,
      strokeWidth: 3
    }
  ],
  legend: ['Cotação do dólar']
};

export function LineChar() {
  const [auxiliaryText, setAuxiliaryText] = useState<null | number>(null);

  return (
    <>
      <View style={{ alignItems: 'center' }}>
        <Text style={{ marginBottom: 4, fontSize: 16, color: '#fff'}}>Valor selecionado</Text>
        <Text style={{ marginBottom: 24, fontSize: 32, color: '#fff'}}>{auxiliaryText?.toFixed(2)}</Text>
      </View>

      <LineCharKit
        data={data}
        width={screenWidth - 32}
        bezier
        height={312}
        chartConfig={chartConfig}
        formatXLabel={(date) => formatDate(date)}
        verticalLabelRotation={30}
        withInnerLines={false}
        withOuterLines={false}
        yAxisLabel={'R$ '}
        yLabelsOffset={8}
        onDataPointClick={({value,dataset}) => {setAuxiliaryText(value); console.log(dataset);}} // interessante
      />
    </>
  );
}
