"use client"
import { useQueryFetch } from '@/hooks/useFetch'
import { Grid, Typography } from '@mui/material'
import axios from 'axios'
import Image from 'next/image'
import { useEffect, useState } from 'react'
// import styles from './page.module.css'


export default function Home() {

  const [fetchedData, setFetchedData] = useState([])




  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
      setFetchedData(res.data)
    }

    )
  }, []
  )

  console.log("zcmvkfv", fetchedData);


  return (
    <Grid container bgcolor='' sx={{
      justifyContent: 'center'
    }}>

      {
        fetchedData.map((data: any, index: any) =>

          <Grid container lg={5} sx={{
            m: 2, justifyContent: 'center', alignItems: 'center',
            boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px', borderRadius: 3, cursor: 'pointer'
          }} >

            <Typography sx={{
              my: 2, textAlign: 'center',
              width: '100%',
              fontWeight: 'bold',
              fontSize: 21
            }}>
              {data.title}
            </Typography>

            <Typography sx={{
              width: '80%', textAlign: 'center', my: 2.5,

            }}>
              {data.body}
            </Typography>

          </Grid>
        )
      }






    </Grid>
  )
}
