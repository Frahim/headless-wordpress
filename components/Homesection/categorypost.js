import React from 'react'
import getAllCategory from '../../Libary/getAllCategories'


export default async function categorypost() {
 const categories = await getAllCategory()
 //console.log (categories)
  return (
    <>
     {categories.map((item) => {
                return (

                    <section key={item.id} className="banner">
                       <h2>CAt name {item.name}</h2>
                    </section>

                )
            })}
    </>
  )
}
 