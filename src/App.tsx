import VpnKeyIcon from '@mui/icons-material/VpnKey';


function App() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-[#e6e6e6]'>
      <div className="flex flex-col bg-white p-10 text-center w-[96%] lg:w-[30rem] shadow-2xl">
        <VpnKeyIcon className='text-blue-400 my-2 m-auto w-fit' style={{fontSize: '3rem'}} />
        <h1 className='text-[1.2rem] font-semibold my-2'>Password Required</h1>
        <p className='text-[0.9rem] font-normal my-2'>You need a password to access a file</p>
        <p className='text-[1rem] font-medium my-2'>Single User Landing Page</p>
        <div className='min-w-[10rem]'>
        <input type='password' className='w-full bg-gray-200 text-gray-400 my-2 h-10 px-4' placeholder='Enter Password' />
        <button className='bg-[#0d99ff] rounded-md text-white w-full text-center my-2 h-10'>Continue</button>
      </div>
      </div>
    </div>
  )
}

export default App;
