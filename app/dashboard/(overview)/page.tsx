import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import { RevenueChartSkeleton, InvoiceSkeleton, CardsSkeleton } from '@/app/ui/dashboard/skeletons';
import CardWrapper from '@/app/ui/dashboard/cards';

export default async function Page() {

    return (
        <main>
            <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
                Dashboard
            </h1>
            <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
                {/* <Card title="Collected" value={totalPaidInvoices} type="collected" />
                <Card title="Pending" value={totalPendingInvoices} type="pending" />
                <Card title="Number of invoices" value={numberOfInvoices} type="invoices" />
                <Card title="Number of customers" value={numberOfCustomers} type="customers" /> */}
                <Suspense fallback={<CardsSkeleton />}>
                    <CardWrapper />
                </Suspense>
            </div>
            <div className='mt-6 grid gap-6 grid-cols-1 md:grid-cols-4 lg:grid-cols-8'>
                <Suspense fallback={<RevenueChartSkeleton />}>
                    <RevenueChart />
                </Suspense>
                <Suspense fallback={<InvoiceSkeleton />}>
                    <LatestInvoices />
                </Suspense>
            </div>
        </main>
    );
}