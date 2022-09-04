
import PfBox from './components/pf_box';

function Home() {
  return (
    <div className='bg-black md:flex sm:flex-col md:flex-row items-start justify-start w-screen h-screen box-border overflow-hidden'>
        <div className='text-white my-auto mx-6 md:my-auto my-4'>
            <p className='mr-3 text-3xl font-bold'>A <span className='text-yellow-400'>self-taught</span> programmer..</p>
            <div className='bg-white bg-opacity-5 border-[1px] border-opacity-10 border-white p-2 rounded-md mt-4 ml-2'>
            <p className='text-2xl text-red-200'>Hi~there!</p>
            <p>I am a Flutter Developer. Having ReactJS and DevOps Skills.</p>
            <p>Started Developer Journey Since [2019-Present]</p>
            </div>
            <div className='flex mt-10 w-full items-center justify-evenly'>
            <button className='rounded-md px-4 py-2 bg-purple-700 text-center' >View Projects</button>
            <button className='rounded-md px-4 py-2 bg-yellow-600 text-center' >Contact Me</button>
            </div>
        </div>

        <PfBox/>

    </div>
  );
}

export default Home;
