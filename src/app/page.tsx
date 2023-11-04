import Image from 'next/image'

export default function Home() {
  return (
    <div
      className="flex items-center justify-center h-screen bg-cover"
      style={{ backgroundImage: `url('/background.jpg')` }}
    >
      <div className="bg-black bg-opacity-75 border-4 border-yellow-500 rounded-lg p-6">
        <p className="text-lg text-white text-center font-bold">
          <img src="/bicolit-logo.png" alt="icon" className="w-8 h-8 inline-block mr-3" />
          BICOLIT.ORG INC
        </p>
        <br/>
        <h1 className="text-5xl font-extrabold text-yellow-500 text-center mt-2">2023 BICOL IT</h1>
        <h2 className="text-3xl font-extrabold text-yellow-500 text-center">General Assembly</h2>
        <p className="text-lg text-white text-center mt-2">December 2, 2023</p>
        <p className="text-lg text-white text-center">LCC Cinema, Legazpi city</p>
        <p className="text-lg text-white text-center font-bold mt-8" style={{ textShadow: '0 0 10px #FCD34D' }}>PRE-REGISTRATION NOW OPEN</p>
        <center>
          <img src="/qr.png" alt="qr" className="w-20 h-20 mt-2" />
        </center>
      </div>
    </div>
  )
}
