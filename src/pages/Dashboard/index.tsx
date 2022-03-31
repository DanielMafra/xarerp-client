import { useState, useEffect } from 'react';
import { useApi } from '../../hooks/useApi';
import LineChartXR from '../../components/Dashboard/LineChartXR';
import ResumeBalance from '../../components/Dashboard/ResumeBalance';
import * as C from './styles';

const Dashboard = () => {
  const api = useApi();
  const [data, setData] = useState<any>([]);

  const fetchData = async () => {
    let result = await api.getData();

    if (result) {
      setData(result);
    }
  }

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <C.Container>
      {data.result
        &&
        <C.SalesArea>
          <C.ResumeBalanceArea>
            <ResumeBalance value={data.result.sales.profit} type="Lucro" />
            <ResumeBalance value={data.result.sales.received} type="Recebido" />
            <ResumeBalance value={data.result.sales.invested} type="Investido" />
          </C.ResumeBalanceArea>
          <C.SalesDaily>
            <LineChartXR
              data={data.result.sales.list}
              dataKeyLine="quantitySales"
              nameLine="Vendas"
              dataKeyXAxis="date"
            />
          </C.SalesDaily>
        </C.SalesArea>}
    </C.Container>
  )
}

export default Dashboard;

/*

{data.result
        &&
        <LineChartXR
          data={data.result.sales.list}
          dataKeyLine="quantitySales"
          nameLine="Vendas"
          dataKeyXAxis="date"
        />
      }

 */
