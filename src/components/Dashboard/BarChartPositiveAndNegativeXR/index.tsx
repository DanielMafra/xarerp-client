import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ReferenceLine } from 'recharts';

type LineChartXRProps = {
  data: any;
  dataKeyXAxis: string;
  dataKeyPositive: string;
  datasKeyNegative: string;
  nameLinePositive: string;
  nameLineNegative: string;
}

const BarChartPositiveAndNegativeXR = ({ data, dataKeyPositive, datasKeyNegative, nameLinePositive, nameLineNegative, dataKeyXAxis }: LineChartXRProps) => {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <BarChart data={data} margin={{ top: 16 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={dataKeyXAxis} />
        <YAxis />
        <Tooltip labelFormatter={() => ''} cursor={{ fill: "#2b2b37" }} contentStyle={{ backgroundColor: '#2b2b37' }} />
        <ReferenceLine y={0} stroke="#8884d8" />
        <Bar dataKey={dataKeyPositive} fill="#8884d8" name={nameLinePositive} />
        <Bar dataKey={datasKeyNegative} fill="#82ca9d" name={nameLineNegative} />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default BarChartPositiveAndNegativeXR;
