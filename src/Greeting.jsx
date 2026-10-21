import React from 'react'
import Hello from './Hello'

export default function Greeting() {


    //js code function
  const name="kumar"
  const city="salem"
  return (
    <div className='greeting'>
      <h1>Greeting component {name}</h1>
      <Hello native={city} name={name} />
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At impedit, consequatur delectus ipsa hic explicabo et ullam blanditiis numquam excepturi natus iure ipsam mollitia nostrum qui beatae nulla quisquam repellendus itaque amet doloremque quo. Modi aspernatur, ut, molestiae numquam quia tenetur ipsum asperiores facere earum sequi accusantium. Sit blanditiis architecto beatae eaque! Deleniti officiis itaque et vel, odit, cumque quam delectus vero fugiat harum quos tempore eos non unde dicta reprehenderit suscipit repudiandae atque exercitationem. Dignissimos necessitatibus sint magnam, error eius eaque tempore quae quam officia sunt ratione fugit aspernatur saepe dolorum beatae mollitia quis? Velit hic at molestias maiores deleniti, incidunt ut? Et sit earum obcaecati possimus. Dicta, corrupti sunt? Recusandae possimus inventore placeat quia eligendi asperiores, vero voluptates provident odit nihil blanditiis molestias, alias rem ipsam omnis cumque officia. Inventore quas sed molestias nobis, iure non blanditiis necessitatibus sint qui deserunt, pariatur hic laboriosam minus aliquam quaerat saepe sequi tenetur officia iste a corrupti commodi quis! Suscipit voluptatum nostrum eveniet veritatis libero autem id cupiditate animi quod placeat minus magnam voluptatibus doloribus impedit aliquam enim minima ducimus deserunt maiores dolorum, quos consequatur. Voluptates dolorum tenetur vitae, esse cum quae error dolor dolores et maxime animi nulla mollitia exercitationem!</p>
    </div>
    
  )
}
