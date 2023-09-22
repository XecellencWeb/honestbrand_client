

function NotFound({message}) {
  return (
    <div className="text-center h-screen flex flex-col w-full items-center justify-center">
    <div className="head bg-orange-200 rounded-full relative before:absolute before:w-full before:h-full before:bg-slate-900 before:bottom-1/4 before:left-1/2 before:rounded-full before:-z-10 before:-translate-x-1/2 after:absolute after:w-1/2 after:h-1/2 after:bg-slate-900 after:bottom-3/4 after:-translate-y-1/4 after:left-1/2 after:rounded-full after:z-10 after:-translate-x-1/2">

      <div className="eye1 absolute -translate-y-3/4 w-1/4 h-1/4 bg-orange-300 rounded-full top-1/2 left-5
      before:absolute before:-translate-y-3/4 before:w-1/4 before:h-1/4 before:bg-black before:z-10 before:rounded-full before:top-1/2 before:left-5 after:absolute after:-translate-y-1/2 after:w-3/4 after:h-3/4 after:bg-white after:rounded-full after:top-1/2 after:left-1/2 after:-translate-x-1/2"></div>

      <div className="eye2 absolute -translate-y-3/4 w-1/4 h-1/4 bg-orange-300 rounded-full top-1/2 right-5
      before:absolute before:-translate-y-3/4 before:w-1/4 before:h-1/4 before:bg-black before:z-10 before:rounded-full before:top-1/2 before:left-5 after:absolute after:-translate-y-1/2 after:w-3/4 after:h-3/4 after:bg-white after:rounded-full after:top-1/2 after:left-1/2 after:-translate-x-1/2"></div>


      <div className="mouth z-0 overflow-hidden w-1/2 h-1/2 absolute bg-black rounded-full left-1/2 -translate-x-1/2 bottom-1/4 translate-y-3/4 before:absolute before:w-5/6 before:h-5/6 before:rounded-full before:bg-orange-200 before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 after:absolute after:w-full after:h-full after:bg-orange-200 after:top-1/2 after:left-0"><p className="z-50 absolute text-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 main--mouth rotate-180 font-thin">
        ww</p></div>
    </div>
    <p className="my-20">{message || 'We are Sorry. An Error Occured'}</p>
    </div>
  )
}

export default NotFound
