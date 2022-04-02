import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { useContext } from "react";
import { ThemeContext } from 'styled-components';

type LineChartXRProps = {
  data: any;
  dataKeyLine: string;
  nameLine: string;
  dataKeyXAxis: string;
}

const LineChartXR = ({ data, dataKeyLine, nameLine, dataKeyXAxis }: LineChartXRProps) => {
  const { dashboard } = useContext(ThemeContext);

  return (
    <ResponsiveContainer>
      <LineChart data={data} margin={{ top: 16 }}>
        <Line type="monotone" dataKey={dataKeyLine} stroke={dashboard.reference_graphic_primary} name={nameLine} />
        <CartesianGrid stroke={dashboard.cartesian_stroke} strokeDasharray="5 5" />
        <XAxis dataKey={dataKeyXAxis} />
        <YAxis />
        <Tooltip labelFormatter={() => ''} contentStyle={{ backgroundColor: dashboard.background_tooltip }} />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default LineChartXR;