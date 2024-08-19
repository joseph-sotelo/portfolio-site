import './orbital-graphic.css'

export default function Orbitalgraphic(){

    return(
        <div className='mx-auto w-full aspect-square flex items-center justify-around border border-border rounded-full relative scale-y-50'>
            <div id='top-blur' className='absolute mx-auto w-full h-1/4 backdrop-blur-sm rounded-full top-0 -translate-y-1/2' />
            <div id='bottom-blur' className='absolute mx-auto w-full h-1/4 backdrop-blur-sm rounded-full bottom-0 translate-y-1/2' />
            <div className='w-1/2 h-1/2 border border-border rounded-full flex justify-around animate-spin-slow'>
                <div id='oribital-1' className='bg-border w-3 h-3 rounded-full -translate-y-1/2 orbital relative flex justify-around items-center'>
                    <div id='orbital-1-image' className='absolute w-3 h-3 rounded-full bg-blue-500 -animate-spin-slow' />
                    <div className='w-24 h-24 border border-border rounded-full absolute flex justify-around animate-spin-slow'>
                    <div id='orbital-2' className='bg-border w-2 h-2 rounded-full -translate-y-1/2 orbital relative flex justify-around'></div>
                        
                    </div>
                </div>
            </div>
        </div>
    )

}