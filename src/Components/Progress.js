
import {useEffect, useState} from 'react';
import '../styles.css';

export default function Progress({done}){
	
	
	const [style, setStyle] = useState({});
	const [width,setWidth]= useState();
	// const progress_prop = [
	// 	{
	// 		per: 0,
	// 		color:'rgb(243, 1, 1)'
	// 	},
	// 	{
	// 		per: 35,
	// 		color:'rgb(248, 188, 1)'
	// 	},
	// 	{
	// 		per: 75,
	// 		color:'rgb(248, 188, 1)'
	// 	}

	// ];
	
	
	
	return (
		<div className="progress">
			<div className="changable" style={style}>
				{100}%
			</div>
		</div>
	)
}
