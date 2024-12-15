import Link from 'next/link';
import React from 'react';
import { FaChevronLeft } from 'react-icons/fa';

const Page = () => {
    return (
        <div className='md:mr-10 md:px-0 px-5'>
            <Link className='text-2xl font-semibold my-10 flex items-center gap-2' href={'/dashboard/setting'}>
                <FaChevronLeft className="text-xl font-semibold" />
                Privacy Policy
            </Link>

            <div>
                <p>Lorem ipsum dolor sit amet consectetur. Fringilla a cras vitae orci. Egestas duis id nisl sed ante congue scelerisque. Eleifend facilisis aliquet tempus morbi leo sagittis. Pellentesque odio amet turpis habitant. Imperdiet tincidunt nisl consectetur hendrerit accumsan vehicula imperdiet mattis. Neque a vitae diam pharetra duis habitasse convallis luctus pulvinar. Pharetra nunc morbi elementum nisl magnis convallis arcu enim tortor. Cursus a sed tortor enim mi imperdiet massa donec mauris. Sem morbi morbi posuere faucibus. Cras risus ultrices duis pharetra sit porttitor elementum sagittis elementum. Ut vitae blandit pulvinar fermentum in id sed. At pellentesque non semper eget egestas vulputate id volutpat quis. Dolor etiam sodales at elementum mattis nibh quam placerat ut. Suspendisse est adipiscing proin et. Leo nisi bibendum donec ac non eget euismod suscipit. At ultricies nullam ipsum tellus. Non dictum orci at tortor convallis tortor suspendisse. Ac duis senectus arcu nullam in suspendisse vitae. Tellus interdum enim lorem vel morbi lectus.</p>

                <div className='mt-10 flex justify-end'>
                    <Link href={'/dashboard/setting/privacypolicy/edit'} className='bg-primaryBg text-white py-3 px-10 rounded-md'>Edit</Link>
                </div>
            </div>
        </div>
    );
}

export default Page;
