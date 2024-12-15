import Link from 'next/link';
import React from 'react';
import { FaRegEdit } from 'react-icons/fa';

const Page = () => {

    const data = [
        { sl: 1, functionClass: 'Rendering', functionName: '3D Rendering', price: '$122.20' },
        { sl: 2, functionClass: 'Design', functionName: 'Interior Design', price: '$150.00' },
        { sl: 3, functionClass: 'Animation', functionName: '2D Animation', price: '$80.00' },
        { sl: 4, functionClass: 'Rendering', functionName: 'Virtual Reality', price: '$200.00' },
        { sl: 5, functionClass: 'Development', functionName: 'Web Development', price: '$300.00' },
    ];

    return (
        <div className='my-10 md:mr-10 md:px-0 px-5'>
            <div className="overflow-x-auto">
                <table className="min-w-full table-auto bg-white border border-gray-200 rounded-lg shadow-md">
                    <thead>
                        <tr className="text-left text-sm font-semibold text-white bg-black">
                            <th className="px-4 py-3">#SL</th>
                            <th className="px-4 py-3">Function Class</th>
                            <th className="px-4 py-3">Function Name</th>
                            <th className="px-4 py-3">Price</th>
                            <th className="px-4 py-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.sl} className="text-sm border-b border-gray-200">
                                <td className="px-4 py-2">{item.sl}</td>
                                <td className="px-4 py-2">{item.functionClass}</td>
                                <td className="px-4 py-2">{item.functionName}</td>
                                <td className="px-4 py-2">{item.price}</td>
                                <td className="px-4 py-2">
                                    <Link href={'/dashboard/services/edit/545'}>
                                        <FaRegEdit className="text-2xl" />
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Page;
