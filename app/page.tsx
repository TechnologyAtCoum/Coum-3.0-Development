'use client'

import { useRouter } from 'next/navigation';

import logo from '@/src/assets/Rectangle1394.png';
import Image from 'next/image';
import apple from '@/src/assets/apple.png';
import android from '@/src/assets/android.png';
import Design from '@/src/assets/Design.png';
import Frame from '@/src/assets/Frame.png';
import Link from 'next/link';
import logo1 from '@/src/assets/logo1.png';
import logo2 from '@/src/assets/logo2.png';
import logo3 from '@/src/assets/logo3.png';
import lp from '@/src/assets/lp.png';

export default function Home() {

  const router = useRouter();

  const handleClick = () => {
    // Redirect to another page when button is clicked
    router.push('/login');
  };

  return (
    <div className="min-h-screen bg-black scroll-m-10">
    
		<div className="flex w-300 h-20 flex-shrink-0">
			<div className="flex-1">
				<Image src={logo} alt = "Logo" className='w-44 h-10'/>;
			</div>
			
			<div className="flex-1 flex justify-end px-2 py-2">
				<div className="bg-yellow-400 min-w-0.5 h-6 px-4 text-white">
					<Link href="/signin" className='text-white'>Login/Join
					</Link>
				</div>
			</div>
		</div>

		<div className="w-1512 h-4664 bg-black">
			<div className='flex-col items-center justify-center text-center'>
				<div>
					<p className="text-white text-2xl">Enhancing The Music Industry.</p>
				</div>
				<div className='mt-3'>
					<p className="text-gray-300 text-sm">Music Innovation At Is Optimal Form.</p>
				</div>
				<div>
					<p className="text-gray-300 text-sm">All Of Your Work in One Place: Network, Be Hired, Collaborate, NFT’s and More.</p>
				</div>
				<div className='mt-4'>
					<div className='flex items-center justify-center text-center rounded p-1'>
						<p className='w-5 h-5'><Image src={Frame} alt = "apple" className='w-5 h-5 bg-blue-300 rounded-xl'/></p>
						<p className="ml-2 text-gray-300 text-sm">Lorem Ipsum is simply dummy</p>
					</div>
					<div className='flex items-center justify-center text-center rounded p-1'>
						<p className='w-5 h-5'><Image src={Frame} alt = "apple" className='w-5 h-5 bg-blue-300 rounded-xl'/></p>
						<p className="ml-2 text-gray-300 text-sm">Lorem Ipsum is simply dummy</p>
					</div>
					<div className='flex items-center justify-center text-center rounded p-1'>
						<p className='w-5 h-5'><Image src={Frame} alt = "apple" className='w-5 h-5 bg-blue-300 rounded-xl'/></p>
						<p className="ml-2 text-gray-300 text-sm">Lorem Ipsum is simply dummy</p>
					</div>
				</div>

				<div className='items-center justify-center text-center flex mt-12'>
					<div className='flex border border-gray-400 rounded p-1'>
						<p><Image src={apple} alt = "apple" className='w-5 h-5'/></p><p className="text-gray-300 text-sm ml-1">Download for iOS</p>
					</div>
					<div className='flex ml-4 border border-gray-400 rounded p-1'>
					<p><Image src={android} alt = "android" className='w-5 h-5'/></p><p className="text-gray-300 text-sm ml-1">Download for Android</p>
					</div>
				</div>

				<div className='mt-10 items-center justify-center flex'>
					<div className='border border-white rounded-xl'><Image src={Design} alt='design' className='w-40 h-80'/></div>
				</div>

				<div className='mt-10'>
					<p className="text-white text-2xl">Your Obvious Destination.</p>
				</div>
				
				<div className='mt-3'>
					<p className="text-gray-300 text-sm mr-5">One Stop Shop:To Network, Be Hired, Collaborate,</p>
					<p className="text-gray-300 text-sm">Distribution, NFT’s Promotion and More.</p>
				</div>

				<div className="grid grid-cols-2 gap-4">
					<div className="p-4">
						<p className="text-md font-mono text-slate-500">Connecting with the key people.</p>
						<p className="text-gray-300 text-sm">Building a circle of others in the same boat as you.</p>
						<p className="text-gray-300 text-sm">Connect with others in the music industry.</p>
					</div>
					<div className="p-4">
						<p className="font-mono text-slate-500 text-md">Simplify work and get more done.</p>
						<p className="text-gray-300 text-sm">Plan, track, and manage any type of work with project</p>
						<p className="text-gray-300 text-sm">management that flexes to your team’s needs.</p>
					</div>
					<div className="p-4">
						<p className="font-mono text-slate-500 text-md">Leveling The Playing Field Again</p>
						<p className="text-gray-300 text-sm">Access to the best in the game just from a click of a</p>
						<p className="text-gray-300 text-sm">button.</p>
					</div>
					<div className="p-4">
						<p className="font-mono text-slate-500 text-md">Double your productivity</p>
						<p className="text-gray-300 text-sm">Cut over 50% wait time.</p>
					</div>
				</div>

				<div className='sm:w-full md:w-full lg:w-full'>
					<p className="text-gray-300 text-sm lg:mr-80 lg:ml-80 mt-2 mb-2">
						Social Marketplace for music industry professionals to connect, collaborate and make efficient communication and productivity. You can hire or be hired via the platform and manage contractors. You can have financial tools that makes it easier to claim, 
						withdraw and spend your finances earned from music. Creating a whole ecosystem of ease.
					</p>
				</div>

				<div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-4 gap-3 text-white lg:ml-20 lg:mr-20 md:ml-2 md:mr-2 sm:ml-2 sm:mr-2 mt-4 p-4">
					<div className='flex flex-col justify-center items-center text-center border'>
						<div><Image src={logo1} alt="Logo" className='w-44 h-24' /></div>
						<div>Distribution</div>
						<div className='text-center text-xs mt-4 lg:mr-20 lg:ml-20'>Helping independent artists/managers and indie label distribution of their music for the cheapest price in the market. Also able to connect with team of a&r’s and marketing managers to grow your music career.</div>
					</div>
					<div className='flex flex-col justify-center items-center text-center border'>
						<div><Image src={logo2} alt="Logo" className='w-44 h-24' /></div>
						<div className='text-xs'>
							<p className='mr-5'>Finance</p>
						</div>
						<div className='text-start mt-4 text-xs'>
							<p>Loans</p>
							<p>Investment</p>
							<p>Grants</p>
							<p>Donations</p>
						</div>
					</div>
					<div className='flex flex-col justify-center items-center text-center border'>
						<div><Image src={logo3} alt="Logo" className='w-44 h-24' /></div>
						<div className='text-xs'><p>Soundpool</p></div>
						<div className='text-center mt-4 text-xs lg:mr-20 lg:ml-20'><p>A simple NFT platform but in the sounds, loops, samples, 
							compositions and beats sector. Making sure that beat-makers, producers and composers are compensated fully for their creative work.</p></div>
					</div>
				</div>

				<div className='text-white text-xl mt-10'>
					<p>Lorem Ipsum is simply dummy text</p>
					<p>of the printing and typesetting industry.</p>
					<p>Lorem Ipsum has been the industrys standard dummy</p>
				</div>

				<div className='w-50 h-50 flex items-center justify-center'>
					<Image src={lp} alt = "Logo" className='items-center'/>;
				</div>

				<div className='items-center justify-center text-center flex mt-12'>
					<div className='flex border border-gray-400 rounded p-1'>
						<p><Image src={apple} alt = "apple" className='w-5 h-5'/></p><p className="text-gray-300 text-sm ml-1">Download for iOS</p>
					</div>
					<div className='flex ml-4 border border-gray-400 rounded p-1'>
						<p><Image src={android} alt = "android" className='w-5 h-5'/></p><p className="text-gray-300 text-sm ml-1">Download for Android</p>
					</div>
				</div>

				<div className="grid grid-cols-3 gap-4 text-white lg:ml-20 lg:mr-20 mt-4">
					<div className='flex flex-col lg:ml-20'>
						<div className='text-start'>
							<p className='text-xl lg:ml-20 ml-4'>Lorem Ipsum</p>
						</div>
						<div className='text-start text-xs mt-4 lg:mr-20 lg:ml-20 ml-4'>Lorem Ipsum is simply dummy</div>
					</div>
					<div className='flex flex-col'>
						
						<div className='text-center lg:mr-10 mr-10'>
							<p className='text-xl'>Lorem Ipsum</p>
						</div>
						<div className='lg:text-center text-start mt-4 text-xs lg:ml-3'>
							<p>Lorem Ipsum is simply dummy</p>
							<p>Lorem Ipsum is simply dummy</p>
							
						</div>
					</div>
					<div className='flex flex-col lg:ml-20'>
						<div className='text-start'>
							<p className='text-xl'>Lorem Ipsum</p>
						</div>
						<div className='text-start mt-4 text-xs'>
							<p>Lorem Ipsum is simply dummy</p>
							<p>Lorem Ipsum is simply</p>
							<p>Lorem Ipsum</p>
							<p>Lorem Ipsum is</p>
							<p>Lorem Ipsum</p>
							<p>Lorem Ipsum is</p>
						</div>
					</div>
				</div>

				<div className='subs text-white'>
					<p className=''>Sign Up For Updates</p>
					<p>We will email you only about this product.</p>
					<div>
						<input type="text" id="" placeholder="" className="border" style={{borderBottomWidth: '1px'}}/>
					</div>
				</div>

				<div className='copyright'>
				</div>
			</div>
		</div>
    </div>
  );
}

