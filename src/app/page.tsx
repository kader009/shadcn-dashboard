import PageTitle from '@/components/PageTitle';
import { DollarSign, Users, CreditCard, Activity } from 'lucide-react';
import Card, { CardContent, CardProps } from '@/components/Card';
import BarChart from '@/components/BarChart';
import SalesCard, { SalesProps } from '@/components/SalesCard';

const cardData: CardProps[] = [
  {
    label: 'Gross Revenue',
    amount: '$50,000.00',
    discription: 'Increased by 25% compared to last month',
    icon: DollarSign,
  },
  {
    label: 'New Subscribers',
    amount: '+2,500',
    discription: 'Up by 200% from the previous month',
    icon: Users,
  },
  {
    label: 'Total Orders',
    amount: '+15,000',
    discription: 'Grew by 22% since last month',
    icon: CreditCard,
  },
  {
    label: 'Currently Online',
    amount: '+600',
    discription: 'Up by 250 in the last hour',
    icon: Activity,
  },
];


const uesrSalesData: SalesProps[] = [
  {
    name: 'Olivia Martin',
    email: 'olivia.martin@email.com',
    saleAmount: '+$1,999.00',
  },
  {
    name: 'Jackson Lee',
    email: 'isabella.nguyen@email.com',
    saleAmount: '+$1,999.00',
  },
  {
    name: 'Isabella Nguyen',
    email: 'isabella.nguyen@email.com',
    saleAmount: '+$39.00',
  },
  {
    name: 'William Kim',
    email: 'will@email.com',
    saleAmount: '+$299.00',
  },
  {
    name: 'Sofia Davis',
    email: 'sofia.davis@email.com',
    saleAmount: '+$39.00',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-5  w-full">
      <PageTitle title="Dashboard" />
      <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
        {cardData.map((d, i) => (
          <Card
            key={i}
            amount={d.amount}
            discription={d.discription}
            icon={d.icon}
            label={d.label}
          />
        ))}
      </section>
      <section className="grid grid-cols-1  gap-4 transition-all lg:grid-cols-2">
        <CardContent>
          <p className="p-4 font-semibold">Overview</p>

          <BarChart />
        </CardContent>
        <CardContent className="flex justify-between gap-4">
          <section>
            <p>Recent Sales</p>
            <p className="text-sm text-gray-400">
              You made 265 sales this month.
            </p>
          </section>
          {uesrSalesData.map((d, i) => (
            <SalesCard
              key={i}
              email={d.email}
              name={d.name}
              saleAmount={d.saleAmount}
            />
          ))}
        </CardContent>

        {/*  */}
      </section>
    </div>
  );
}
