'use client'

import { MagicWand, Code, ImageSquare, PlayCircle, MusicNotesSimple, PaperPlaneRight, PlusCircle, ArrowRight } from '@phosphor-icons/react'

export default function Home() {
  return (
    <div 
      className='flex flex-col items-center justify-center gap-10 py-9 sm:py-12 sm:px-12'
      style={{
        borderRadius: '2rem',
        border: '1px solid var(--gray-04, #334155)',
        background: 'rgba(2, 6, 23, 0.80)',
      }}
    >
      <div className='flex flex-col gap-10'>
        {/* TITLE */}
        <div className='flex flex-col justify-center items-center gap-3 sm:gap-4'>
          <div className='p-3 w-fit' style={{borderRadius: '1rem', border: '1px solid var(--gray-05, #1E293B)', background: 'var(--gray-06, #0F172A)'}}>
            <MagicWand className='w-10 h-10 text-gray-2'/>
          </div>
          <h1 className='text-gray-1 text-center text-3xl font-bold select-none'>Experimente o poder da Inteligência Artificial</h1>
        </div>
        
        {/* OPTIONS */}
        <div className='flex flex-col gap-2 sm:gap-3 sm:items-center'>
          {/* OPTION */}
          <div 
            className='flex items-center justify-between p-2 group hover:scale-105 transition-all duration-300 sm:min-w-[50%]'
            style={{borderRadius: '1rem', border: '1px solid var(--gray-04, #334155)', background: 'var(--gray-06, #0F172A)'}}
          >
            {/* LEFT */}
            <div className='flex items-center gap-6'>
              <div className='p-3 w-fit group-hover:brightness-150 transition-all duration-300' style={{borderRadius: '1rem', border: '1px solid var(--gray-05, #1E293B)', background: 'var(--gray-06, #0F172A)'}}>
                <Code className='text-gray-3 h-8 w-8'/>
              </div>
              <span className='text-gray-2 sm:text-lg font-bold select-none'>Gerador de códigos</span>
            </div>
            {/* RIGHT */}
            <div className='p-3'>
              <ArrowRight className='text-gray-3 w-8 h-8 group-hover:text-gray-2 transition-all duration-300' />
            </div>
          </div>

          <div 
            className='flex items-center justify-between p-2 group hover:scale-105 transition-all duration-300 sm:min-w-[50%]'
            style={{borderRadius: '1rem', border: '1px solid var(--gray-04, #334155)', background: 'var(--gray-06, #0F172A)'}}
          >
            {/* LEFT */}
            <div className='flex items-center gap-6'>
              <div className='p-3 w-fit group-hover:brightness-150 transition-all duration-300' style={{borderRadius: '1rem', border: '1px solid var(--gray-05, #1E293B)', background: 'var(--gray-06, #0F172A)'}}>
                <ImageSquare className='text-gray-3 h-8 w-8'/>
              </div>
              <span className='text-gray-2 sm:text-lg font-bold select-none'>Edição de foto</span>
            </div>
            {/* RIGHT */}
            <div className='p-3'>
              <ArrowRight className='text-gray-3 w-8 h-8 group-hover:text-gray-2 transition-all duration-300' />
            </div>
          </div>
          
          <div 
            className='flex items-center justify-between p-2 group hover:scale-105 transition-all duration-300 sm:min-w-[50%]'
            style={{borderRadius: '1rem', border: '1px solid var(--gray-04, #334155)', background: 'var(--gray-06, #0F172A)'}}
          >
            {/* LEFT */}
            <div className='flex items-center gap-6'>
              <div className='p-3 w-fit group-hover:brightness-150 transition-all duration-300' style={{borderRadius: '1rem', border: '1px solid var(--gray-05, #1E293B)', background: 'var(--gray-06, #0F172A)'}}>
                <PlayCircle className='text-gray-3 h-8 w-8'/>
              </div>
              <span className='text-gray-2 sm:text-lg font-bold select-none'>Geração de vídeos</span>
            </div>
            {/* RIGHT */}
            <div className='p-3'>
              <ArrowRight className='text-gray-3 w-8 h-8 group-hover:text-gray-2 transition-all duration-300' />
            </div>
          </div>
          
          <div 
            className='flex items-center justify-between p-2 group hover:scale-105 transition-all duration-300 sm:min-w-[50%]'
            style={{borderRadius: '1rem', border: '1px solid var(--gray-04, #334155)', background: 'var(--gray-06, #0F172A)'}}
          >
            {/* LEFT */}
            <div className='flex items-center gap-6'>
              <div className='p-3 w-fit group-hover:brightness-150 transition-all duration-300' style={{borderRadius: '1rem', border: '1px solid var(--gray-05, #1E293B)', background: 'var(--gray-06, #0F172A)'}}>
                <MusicNotesSimple className='text-gray-3 h-8 w-8'/>
              </div>
              <span className='text-gray-2 sm:text-lg font-bold select-none'>Criador de áudios e musicas </span>
            </div>
            {/* RIGHT */}
            <div className='p-3'>
              <ArrowRight className='text-gray-3 w-8 h-8 group-hover:text-gray-2 transition-all duration-300' />
            </div>
          </div>
        </div>

        {/* LINE */}
        <div className='bg-gray-4 w-full h-[0.0625rem]'></div>

        {/* INPUT */}
        <form className='flex items-center justify-between sm:gap-2'>
          <div 
            className='flex items-center gap-2 sm:gap-3 p-2 max-w-[63.5rem] transition-all duration-300'
            style={{borderRadius: '1rem', border: '1px solid var(--gray-04, #334155)', background: 'var(--gray-06, #0F172A)'}}
          >
            <PlusCircle className='w-8 h-8 text-gray-3 hover:scale-105 hover:brightness-150 transition-all duration-300'/>
            <input 
              type="text" 
              placeholder='Envie uma mensagem ou digite “/” para exibir os comandos ' 
              className='placeholder:text-gray-2 text-gray-2 bg-gray-6 focus:outline-none w-[70vw] sm:text-base text-xs group'
            />
          </div>
          <div className='p-2 hover:scale-105 hover:brightness-150 transition-all duration-300' style={{borderRadius: '1rem', border: '1px solid var(--gray-04, #334155)', background: 'var(--gray-06, #0F172A)'}}>
            <PaperPlaneRight className='text-gray-1 w-8 h-8' />
          </div>
        </form>
      </div>
    </div>
  )
}
