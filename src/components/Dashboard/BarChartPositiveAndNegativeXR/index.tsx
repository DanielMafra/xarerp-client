import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ReferenceLine } from 'recharts';
import { useContext } from "react";
import { ThemeContext } from 'styled-components';

type LineChartXRProps = {
  data: any;
  dataKeyXAxis: string;
  dataKeyPositive: string;
  datasKeyNegative: string;
  nameLinePositive: string;
  nameLineNegative: string;
}

const BarChartPositiveAndNegativeXR = ({ data, dataKeyPositive, datasKeyNegative, nameLinePositive, nameLineNegative, dataKeyXAxis }: LineChartXRProps) => {
  const { dashboard } = useContext(ThemeContext);

  return (
    <ResponsiveContainer width="100%" height={260}>
      <BarChart data={data} margin={{ top: 16 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={dataKeyXAxis} />
        <YAxis />
        <Tooltip labelFormatter={() => ''} cursor={{ fill: dashboard.background_tooltip }} contentStyle={{ backgroundColor: dashboard.background_tooltip }} />
        <ReferenceLine y={0} stroke={dashboard.reference_graphic_primary} />
        <Bar dataKey={dataKeyPositive} fill={dashboard.reference_graphic_primary} name={nameLinePositive} />
        <Bar dataKey={datasKeyNegative} fill={dashboard.reference_graphic_secondary} name={nameLineNegative} />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default BarChartPositiveAndNegativeXR;
