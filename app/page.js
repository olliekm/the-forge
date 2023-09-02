import Image from 'next/image'

export default function Home() {
  return (
    <div className="h-screen w-full text-black bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-red-900 via-violet-200 to-orange-500 flex overflow-hidden">
      
      <div className="w-32 h-screen bg-zinc-100"></div>
      <div className="w-96 h-screen bg-zinc-200/95 flex flex-col">
        <div className="w-full h-24 border-b-[1px] border-zinc-300 flex overflow-hidden items-center px-4 space-x-4">
          <div className="h-16 w-16 bg-black rounded-full shrink-0"></div>
          <div className="h-16 w-16 bg-black rounded-full shrink-0"></div>
          <div className="h-16 w-16 bg-black rounded-full shrink-0"></div>
          <div className="h-16 w-16 bg-black rounded-full shrink-0"></div>
          <div className="h-16 w-16 bg-black rounded-full shrink-0"></div>
        </div>
        <div className="flex-1 flex flex-col">
          <div className="w-full h-auto p-4">
            <div className="flex justify-between items-center">
              <h1 className='font-semibold text-3xl'>Messages</h1>
              <svg xmlns="http://www.w3.org/2000/svg" className='fill-blue-600 w-6 h-6' viewBox="0 0 16 16">
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
              </svg>
            </div>
            <div className="p-4">
              <div className="flex bg-zinc-100 rounded-2xl overflow-hidden items-center shadow-sm">
                <div className="p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                  </svg>
                </div>
                <input type="text" className='bg-zinc-100 p-4 pl-0 outline-none flex-1' placeholder='Names, group chats'/>
                <div className="pr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className='fill-black' width="16" height="16" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <small className='px-8'>ALL MESSAGES</small>
            <div className="h-auto divide-y-[1px] divide-zinc-600/10">
              <div className="h-24 w-full flex items-center space-x-4 px-8 hover:bg-zinc-100/40 duration-100">
                <div className="h-16 w-16 bg-black rounded-full"></div>
                <div className="">
                  <h2 className='text-xl'>Oliver Kwun-Morfitt</h2>
                  <small>Is typing..</small>
                </div>
              </div>
              <div className="h-24 w-full flex items-center space-x-4 px-8 hover:bg-zinc-100/40 duration-100">
                <div className="h-16 w-16 bg-black rounded-full"></div>
                <div className="">
                  <h2 className='text-xl'>Oliver Kwun-Morfitt</h2>
                  <small>Is typing..</small>
                </div>
              </div>
              <div className="h-24 w-full flex items-center space-x-4 px-8 hover:bg-zinc-100/40 duration-100">
                <div className="h-16 w-16 bg-black rounded-full"></div>
                <div className="">
                  <h2 className='text-xl'>Oliver Kwun-Morfitt</h2>
                  <small>Is typing..</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col h-screen w-full bg-zinc-100/30 relative overflow-hidden">
          <div className="w-full sticky top-0 h-24 bg-zinc-200/70 backdrop-blur-md"></div>
          <div className="flex-1">
          </div>
          <div className="h-24 flex w-full p-4 space-x-4 items-center">
            <div className="h-16 w-16 rounded-full bg-black"></div>
              <div className="flex flex-1 bg-zinc-100 rounded-2xl overflow-hidden items-center">
                <div className="p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>
                  </svg>
                </div>
                <input type="text" className='bg-zinc-100 p-4 pl-0 outline-none flex-1' placeholder='Type something...'/>
                <div className="p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className='w-6 h-6' viewBox="0 0 16 16">
                      <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z"/>
                    </svg>
                </div>
                <div className="pr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className='fill-blue-400' viewBox="0 0 16 16">
                    <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"/>
                  </svg>
                </div>
            </div>
          </div>
      </div>
      <div className="w-80 h-sccreen bg-zinc-100"></div>
    </div>

  )
}
