import { useState, useEffect } from 'react';
import { useApi } from '../../hooks/useApi';
import LineChartXR from '../../components/Dashboard/LineChartXR';
import BarChartXR from '../../components/Dashboard/BarChartXR';
import BarChartPositiveAndNegativeXR from '../../components/Dashboard/BarChartPositiveAndNegativeXR';
import ResumeBalance from '../../components/Dashboard/ResumeBalance';
import LastSale from '../../components/Dashboard/LastSale';
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
      <C.Graphics>
        {data.result
          &&
          <>
            <C.ContainerSections>
              <C.TitleSections>Vendas nos últimos 07 dias</C.TitleSections>
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
              </C.SalesArea>
            </C.ContainerSections>

            <C.ContainerSections>
              <C.TitleSections>Top 05 produtos mais vendidos</C.TitleSections>
              <BarChartXR
                data={data.result.products.list}
                dataKeyLine="sold_amount"
                nameLine="Total vendido"
                dataKeyXAxis="name"
              />
              <C.AverageTicket>
                <span>Ticket médio: </span>
                <strong>R$ {data.result.products.averageTotalTicket}</strong>
              </C.AverageTicket>
            </C.ContainerSections>

            <C.ContainerSections>
              <C.TitleSections>Lançamentos manuais nos últimos 07 dias</C.TitleSections>
              <C.SalesArea>
                <C.ResumeBalanceArea>
                  <ResumeBalance value={data.result.financial.difference} type="Saldo" />
                  <ResumeBalance value={data.result.financial.totalEntries} type="Entrada" />
                  <ResumeBalance value={data.result.financial.totalOutputs} type="Saída" />
                </C.ResumeBalanceArea>
                <C.SalesDaily>
                  <BarChartPositiveAndNegativeXR
                    data={data.result.financial.list}
                    dataKeyPositive="positive"
                    datasKeyNegative="negative"
                    nameLinePositive="Entrada"
                    nameLineNegative="Saída"
                    dataKeyXAxis="date"
                  />
                </C.SalesDaily>
              </C.SalesArea>
            </C.ContainerSections>
          </>
        }
      </C.Graphics>

      <C.LastSalesArea>
        <C.TitleLastSales>Últimas vendas</C.TitleLastSales>
        {data.result
          &&
          data.result.sales.lastSales.map((item: any, index: number) => (
            <LastSale key={index} price={item.price} name={item.name} unity={item.unity} quantity={item.quantity} />
          ))
        }
      </C.LastSalesArea>
    </C.Container>
  )
}

export default Dashboard;
