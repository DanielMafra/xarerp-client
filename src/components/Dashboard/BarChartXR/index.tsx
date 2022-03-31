import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

type LineChartXRProps = {
  data: any;
  dataKeyXAxis: string;
  dataKeyLine: string;
  nameLine: string;
}

const BarChartXR = ({ data, dataKeyLine, nameLine, dataKeyXAxis }: LineChartXRProps) => {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <BarChart data={data} margin={{ top: 16 }}>
        <XAxis dataKey={dataKeyXAxis} />
        <YAxis />
        <Tooltip labelFormatter={() => ''} cursor={{ fill: "#2b2b37" }} contentStyle={{ backgroundColor: '#2b2b37' }} />
        <Bar dataKey={dataKeyLine} fill="#8884d8" name={nameLine} />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default BarChartXR;
