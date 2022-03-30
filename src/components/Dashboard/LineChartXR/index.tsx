import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

type LineChartXRProps = {
  data: any;
  dataKeyLine: string;
  nameLine: string;
  dataKeyXAxis: string;
}

const LineChartXR = ({ data, dataKeyLine, nameLine, dataKeyXAxis }: LineChartXRProps) => {
  return (
    <div style={{ marginTop: 24, width: '100%', height: '200px' }}>
      <ResponsiveContainer>
        <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
          <Line type="monotone" dataKey={dataKeyLine} stroke="#8884d8" name={nameLine} />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey={dataKeyXAxis} />
          <YAxis />
          <Tooltip labelFormatter={() => ''} contentStyle={{ backgroundColor: '#2b2b37' }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default LineChartXR;