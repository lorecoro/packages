import { lusitana } from '@/app/ui/fonts';

export default async function Page() {

return (
    <div className="w-full">
        <div className="flex w-full items-center justify-between">
            <h1 className={`${lusitana.className} text-2x1`}>Order a new package</h1>
        </div>
        <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
            TODO
        </div>
    </div>
);
}