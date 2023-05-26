import React, { useEffect } from 'react'
import './About.css'
import LUROCOSTUDIO from '../../assets/LUROCOSTUDIO.jpg'
import { useDispatch } from 'react-redux'
import { getNavState } from '../../redux/actions'

const About = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getNavState('Sobre nosotrxs'))
    },[dispatch])
    return (
        <main className='container-about'>
            <div className='img_contenedor'>
                <img src={LUROCOSTUDIO} alt="LUROCOSTUDIO" className='imagen' />
            </div>
            <div className='texto_contenedor'>
                <h2 className='h2_about'>QUIENES SOMOS?</h2>
                <p className='p_about'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos eveniet cumque voluptatibus voluptatum tempore nam aspernatur ab temporibus sapiente! Illum suscipit in corrupti perspiciatis soluta aut nemo expedita recusandae ullam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus iste cumque iure enim magni! Voluptatum, odio est! Quas repudiandae modi, inventore eos quis error in iste beatae dolorum cupiditate vel. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores labore laboriosam mollitia nobis, eos repudiandae numquam odit accusantium debitis commodi similique aspernatur fugiat nisi sapiente eius obcaecati a illum molestiae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quos culpa nulla illum maxime fugiat voluptatum sequi! Nostrum vel sequi, non dolorem exercitationem, ullam eveniet, excepturi possimus sapiente porro facere. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae voluptate, error quaerat numquam debitis, voluptatem illo illum deserunt, atque eveniet hic magni magnam eaque nemo maxime tempore repellendus! Ad, illum?l Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, omnis? Illo nihil qui alias dicta nam eos consequatur. Facilis doloremque sit in non? Enim animi asperiores veniam aperiam velit dignissimos! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet hic delectus voluptates, in nesciunt nisi exercitationem culpa. Officiis velit, quas repellat asperiores quasi culpa nostrum voluptates voluptate numquam accusamus magni.</p>
            </div>
        </main>
    )
}

export default About