

import React from 'react'
import { GifsGridItem } from './GifsGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifsGrid = ({ category }) => {
  
    const { data:gifs, loading } = useFetchGifs(category);
  
    return (
      <>
        <h3>{ category }</h3>

        <p className='animate__animated animate__flash'>{ loading ? 'cargando...' : '' }</p>

        <div className='card-grid animate__animated animate__delay-4s'>
            {
              gifs.map(gif => (

                <GifsGridItem 
                  key={ gif.id } 
                  {...gif}
                />

              ))
            }
        </div>
      </>
    )
}
