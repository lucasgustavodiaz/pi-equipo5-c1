"use client";

import { useState } from "react";

export function Form(){
    
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [pricePerDay, setPricePerDay] = useState('');
    const [pricePerWeek, setPricePerWeek] = useState('');
    const [pricePerHour, setPricePerHour] = useState('');
    const [category, setCategory] = useState('PREMIUM');
    const [available, setAvailable] = useState(true);

    function handleChangeName(e){
        setName(e.target.value.trim())
    }

    function handleChangeDescription(e){
        setDescription(e.target.value)
    }

    function handleChangeImage(e){
        setImage(e.target.value)
    }

    function handleChangePricePerDay(e){
        setPricePerDay(e.target.value.trim())
    }
    
    function handleChangePricePerWeek(e){
        setPricePerWeek(e.target.value.trim())
    }

    function handleChangePricePerHour(e){
        setPricePerHour(e.target.value.trim())
    }

    function handleChangeCategory(e){
        setCategory('PREMIUM');
    }

    function handleChangeAvailable(e){
        setAvailable(available ? true : false)
    }

    async function handleSubmit(e){
        e.preventDefault();
        const yacht = {
            nombre: name,
            descripcion: description,
            imagen: image,
            pricePerDay: pricePerDay,
            pricePerWeek: pricePerWeek,
            pricePerHour: pricePerHour,
            category: category,
            available: available
        }
        console.log(JSON.stringify(yacht))
        const urlPost = 'http://localhost:8081/api/create';

        try {
            const response = await fetch(urlPost, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(yacht)
            });
        
            if (!response.ok) {
                throw new Error('Error al cargar los datos en el registro. Response: ' + response.status);
            } else{
                window.location.replace(`http://localhost:3000/administracion`);
            }
        
            const data = await response.json();
            console.log('Respuesta del servidor:', data);
          } catch (error) {
            console.error('Error al realizar la solicitud POST:', error);
          }
    }

    function handleReset(e){
        e.preventDefault();
        setName('');
        setDescription('');
        setImage('')
        setPricePerDay('');
        setPricePerWeek('');
        setPricePerHour('');
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nombre del yate</label>
                <input type="text" value={name} onChange={handleChangeName} placeholder="Ingrese nombre del yate" id="name"/>
            </div>
            <div>
                <label htmlFor="description">Descripcion del yate</label>
                <input type="text" value={description} onChange={handleChangeDescription} placeholder="Ingrese una breve descripcion del yate" id="description"/>
            </div>
            <div>
                <label htmlFor="image">Imagen del yate</label>
                <input type="text" value={image} onChange={handleChangeImage} placeholder="Ingrese la imagen del yate" id="image"/>
            </div>
            <div>
                <label htmlFor="pricePerDay">Precio por dia</label>
                <input type="text" value={pricePerDay} onChange={handleChangePricePerDay} placeholder="Ingrese precio de alquiler por dia" id="pricePerDay"/>
            </div>
            <div>
                <label htmlFor="pricePerWeek">Precio por semana</label>
                <input type="text" value={pricePerWeek} onChange={handleChangePricePerWeek} placeholder="Ingrese precio de alquiler por semana" id="pricePerWeek"/>
            </div>
            <div>
                <label htmlFor="pricePerHour">Precio por hora</label>
                <input type="text" value={pricePerHour} onChange={handleChangePricePerHour} placeholder="Ingrese precio de alquiler por hora" id="pricePerHour"/>
            </div>
            <div>
                <label htmlFor="pricePerHour">Categoria</label>
                <input type="text" value={category} onChange={handleChangeCategory} placeholder="Ingrese la categoria del yate" id="category" disabled/>
            </div>
            <div>
                <label htmlFor="pricePerHour">Disponibilidad</label>
                <input type="checkbox" value={available} onChange={handleChangeAvailable} id="available" checked disabled/>
            </div>

            <button type="reset"  className="btn btn-primary m-2" onClick={handleReset}>Reiniciar</button>
            <button type="submit" className="btn btn-primary m-2">Enviar</button>
        </form>
    )
}