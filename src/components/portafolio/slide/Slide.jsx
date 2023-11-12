import React from 'react';
import estilos from './Slider.css';
import {BsFillSkipForwardFill} from 'react-icons/bs'
import {BsFillSkipBackwardFill} from 'react-icons/bs'
function Slide({ imagenes }) {
	const [imagenActual, setImagenActual] = React.useState(0);
	const cantidad = imagenes?.length;
	const siguienteImagen = () => {
		setImagenActual(imagenActual === cantidad - 1 ? 0 : imagenActual + 1);
		console.log('sss')
	};
	const anteriorImagen = () => {
		setImagenActual(imagenActual === 0 ? cantidad - 1 : imagenActual - 1);
		console.log('aaa')
	};		
	return (
		<div id='imgSlide' className={estilos.container2}>	
		<center>
			{imagenes.map((imagen, index) => {
				return (
					<div
					id='container-img'
						key={index}
						className={
							imagenActual === index
								? `${estilos.slide} ${estilos.active}`
								: estilos.slide
						}>
						{imagenActual === index && (
							<img id='Img' key={index} src={require('../../../assets/'+imagen)} alt="imagen" />
						)}
					</div>
				)
			})}	
			</center>		
			<button id='buttonImageA' className='buttonImg' onClick={anteriorImagen}><BsFillSkipBackwardFill/></button>
			<button id='buttonImageS' className='buttonImg'onClick={siguienteImagen}><BsFillSkipForwardFill/></button>		
		</div>
	);
}

export default Slide;
/*
return (
					<div
						key={index}
						className={
							imagenActual === index
								? `${estilos.slide} ${estilos.active}`
								: estilos.slide
						}>
						{imagenActual === index && (
							<img key={index} src={'../../assets/'+imagen} alt="imagen" />
						)}
					</div>
				)
				 */