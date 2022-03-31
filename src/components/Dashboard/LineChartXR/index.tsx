import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

type LineChartXRProps = {
  data: any;
  dataKeyLine: string;
  nameLine: string;
  dataKeyXAxis: string;
}

const LineChartXR = ({ data, dataKeyLine, nameLine, dataKeyXAxis }: LineChartXRProps) => {
  return (
    <ResponsiveContainer>
      <LineChart data={data} margin={{ top: 16 }}>
        <Line type="monotone" dataKey={dataKeyLine} stroke="#8884d8" name={nameLine} />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey={dataKeyXAxis} />
        <YAxis />
        <Tooltip labelFormatter={() => ''} contentStyle={{ backgroundColor: '#2b2b37' }} />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default LineChartXR;