import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../contexts/auth/AuthContext';
import { useApi } from '../../hooks/useApi';
import LineChartXR from '../../components/Dashboard/LineChartXR';
import BarChartXR from '../../components/Dashboard/BarChartXR';
import BarChartPositiveAndNegativeXR from '../../components/Dashboard/BarChartPositiveAndNegativeXR';
import PieChartXR from '../../components/Dashboard/PieChartXR';
import ResumeBalance from '../../components/Dashboard/ResumeBalance';
import LastSale from '../../components/Dashboard/LastSale';
import * as C from './styles';

const Dashboard = () => {
  const api = useApi();
  const auth = useContext(AuthContext);
  const [data, setData] = useState<any>([]);
  const [targetDate, setTargetDate] = useState(7);

  const viewSalesAnalyticsRoles = ['Administração', 'Financeiro', 'Vendas'];
  const viewProductsAnalyticsRoles = ['Administração', 'Vendas', 'Depósito'];
  const viewFinancialAnalyticsRoles = ['Administração', 'Financeiro'];
  const viewStoresAnalyticsRoles = ['Administração'];

  const fetchData = async () => {
    let result = await api.getData(targetDate);

    if (result) {
      setData(result);
    }
  }

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetDate]);

  return (
    <C.Container>
      <C.Graphics>
        {data.result
          &&
          <>
            {viewSalesAnalyticsRoles.includes(auth.user?.position!)
              &&
              <C.ContainerSections>
                <C.TitleSections>Vendas nos últimos
                  <C.BtnArea>
                    <button
                      className={targetDate === 7 ? 'active' : ''}
                      onClick={() => setTargetDate(7)}
                    >07 dias</button>
                    <button
                      className={targetDate === 15 ? 'active' : ''}
                      onClick={() => setTargetDate(15)}
                    >15 dias</button>
                    <button
                      className={targetDate === 30 ? 'active' : ''}
                      onClick={() => setTargetDate(30)}
                    >30 dias</button>
                  </C.BtnArea>
                </C.TitleSections>
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
            }

            {viewStoresAnalyticsRoles.includes(auth.user?.position!)
              &&
              <C.ContainerSections>
                <C.TitleSections>Lucro por tipo de unidade nos últimos
                  <C.BtnArea>
                    <button
                      className={targetDate === 7 ? 'active' : ''}
                      onClick={() => setTargetDate(7)}
                    >07 dias</button>
                    <button
                      className={targetDate === 15 ? 'active' : ''}
                      onClick={() => setTargetDate(15)}
                    >15 dias</button>
                    <button
                      className={targetDate === 30 ? 'active' : ''}
                      onClick={() => setTargetDate(30)}
                    >30 dias</button>
                  </C.BtnArea>
                </C.TitleSections>
                <C.SalesArea>
                  <C.SalesDaily>
                    <PieChartXR
                      data={data.result.stores.profitByType}
                      dataKey="profit"
                      nameKey="type"
                    />
                  </C.SalesDaily>
                  <C.TableRanking>
                    <C.TableLine>
                      <tr>
                        <C.TableLineItem>Top lojas</C.TableLineItem>
                      </tr>
                    </C.TableLine>
                    {data.result.stores.rankingByType.map((store: any, index: number) => (
                      <C.TableContent key={index}>
                        <tr>
                          <C.TableContentItem>{store.name}</C.TableContentItem>
                          <C.TableContentItem>{store.type}</C.TableContentItem>
                          <C.TableContentItem>R$ {store.profit}</C.TableContentItem>
                        </tr>
                      </C.TableContent>
                    ))}
                  </C.TableRanking>
                </C.SalesArea>
              </C.ContainerSections>
            }

            {viewProductsAnalyticsRoles.includes(auth.user?.position!)
              &&
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
            }

            {viewFinancialAnalyticsRoles.includes(auth.user?.position!)
              &&
              <C.ContainerSections>
                <C.TitleSections>Lançamentos manuais nos últimos
                  <C.BtnArea>
                    <button
                      className={targetDate === 7 ? 'active' : ''}
                      onClick={() => setTargetDate(7)}
                    >07 dias</button>
                    <button
                      className={targetDate === 15 ? 'active' : ''}
                      onClick={() => setTargetDate(15)}
                    >15 dias</button>
                    <button
                      className={targetDate === 30 ? 'active' : ''}
                      onClick={() => setTargetDate(30)}
                    >30 dias</button>
                  </C.BtnArea>
                </C.TitleSections>
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
            }
          </>
        }
      </C.Graphics>

      {viewSalesAnalyticsRoles.includes(auth.user?.position!)
        &&
        <C.LastSalesArea>
          <C.TitleLastSales>Últimas vendas</C.TitleLastSales>
          {data.result
            &&
            <C.LastSalesAreaCards>
              {data.result.sales.lastSales.length > 0 ? (
                data.result.sales.lastSales.map((item: any, index: number) => (
                  <LastSale key={index} price={item.price} name={item.name} unity={item.unity} quantity={item.quantity} />
                ))
              ) : (
                <p style={{ fontSize: '12px' }}>Nenhum registro.</p>
              )
              }
            </C.LastSalesAreaCards>}
        </C.LastSalesArea>
      }
    </C.Container>
  )
}

export default Dashboard;
