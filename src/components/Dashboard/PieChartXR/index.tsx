import { PieChart, Pie, ResponsiveContainer } from 'recharts';
import { useContext } from "react";
import { ThemeContext } from 'styled-components';

type PieChartXRProps = {
  data: any;
  dataKey: string;
  nameKey: string;
}

const PieChartXR = ({ data, dataKey, nameKey }: PieChartXRProps) => {
  const { dashboard } = useContext(ThemeContext);

  return (
    <ResponsiveContainer>
      <PieChart>
        <Pie
          dataKey={dataKey}
          nameKey={nameKey}
          label={(data) => `${data.payload[nameKey]} - R$ ${data.payload[dataKey]}`}
          isAnimationActive={true}
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill={dashboard.reference_graphic_primary}
        />
      </PieChart>
    </ResponsiveContainer>
  )
}

export default PieChartXR;