
import {useEffect, useState} from 'react';
import '../styles.css';

export default function Progress({done}){

	const [style, setStyle] = useState({});
	const [width,setWidth]= useState(0);
	
	useEffect(() => {
    const interval = setInterval(() => {
      setWidth(oldValue => {
        const newValue = oldValue + 1;
        if (newValue >= done) {
          clearInterval(interval);
        }
        return newValue;
      });
    }, 40);
	}, []);

	useEffect(() => {
		if(width<35){
			setStyle({
				width: `${width}%`,
				backgroundColor:'rgb(243, 1, 1)'
			});
		}
		else if(width < 75){
			setStyle({
				width: `${width}%`,
				backgroundColor:'rgb(248, 188, 1)'
			});
		}else{
			setStyle({
				width: `${width}%`,
				backgroundColor:'rgb(1, 212, 173)'
			});
		}
	}, [width]);
	
	
	return (
		<div className="progress">
			<div className="changable" style={style}>
				{width}%
			</div>
		</div>
	)
}
