import { PieChart, Pie, ResponsiveContainer } from 'recharts';

type PieChartXRProps = {
  data: any;
  dataKey: string;
  nameKey: string;
}

const PieChartXR = ({ data, dataKey, nameKey }: PieChartXRProps) => {
  return (
    <ResponsiveContainer>
      <PieChart>
        <Pie
          dataKey={dataKey}
          nameKey={nameKey}
          label={(data) => `${data.payload[nameKey]} - R$ ${data.payload[dataKey]}`}
          isAnimationActive={false}
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
        />
      </PieChart>
    </ResponsiveContainer>
  )
}

export default PieChartXR;