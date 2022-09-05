export const TiposBasicos = () => {

	// let nombre: string | number = 'Milagros';
	let nombre: string  = 'Milagros';
	// nombre = 123; error por que cambia el tipo de dato cuando no se especifica el dato o se especifica solo de tipo string
	
	let edad: number = 30;
	let estaActivo: boolean = true;

	const poderes: string[] = ['Velocidad', 'Volar', 'Respirar en el agua'];


	return (
		<>
			<h3>Tipos básicos</h3>
			{ nombre }, { edad }, { (estaActivo) ? 'Activo' : 'Inactivo' }
			<br />
			{ poderes.join(', ') }
		</>
	)
}
	
 