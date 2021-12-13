import React, { useState, useEffect } from 'react'
import Layout from '@components/Layout/Layout'
import KawaiiHeader from '@components/KawaiiHeader/KawaiiHeader'
import ProductList from '@components/ProductList/ProductList'
import fetch from 'isomorphic-unfetch'







// export const getServerSideProps = async () => {
//   const response = await fetch('https://nextjs-tan-phi-42.vercel.app/api/avo')
//   const { data: productList }: TAPIAvoResponse = await response.json()

//   return {
//     props: {
//       productList
//     }
//   }
// }
export const getStaticProps = async () => {
    const response = await fetch('https://nextjs-tan-phi-42.vercel.app/api/avo')
    const { data: productList }: TAPIAvoResponse = await response.json()

    return {
      props: {
        productList
      }
    }
  }
const HomePage = ({ productList } : { productList: TProduct[]}) => {

  return (
    <Layout>
    <KawaiiHeader />
    < ProductList products = { productList } />
      </Layout>
  )
}

export default HomePage
