import * as React from 'react';
import Rating from '@mui/material/Rating';

export default function EstrelaAvaliativa() {
  return ( 
      <div className='flex items-center gap-2'>
        <Rating defaultValue={5} precision={0.5} readOnly/>
        <p className='paragrafo font-semibold text-cor-cinzaEscuro'>5.0</p>
      </div>
  );
}