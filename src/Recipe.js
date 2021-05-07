import React,{useState} from 'react';
import style from './recipe.module.css';

function Recipe({title, calories, image, ingredients, cuisineType, dishType, dietLabels, knowMore}) {
    const cal = calories;
    const [showMore, setShowMore] = useState(false)
    const switchMode = () => {
        setShowMore((prevShowMore) => !prevShowMore);
    }
    return (
        <div className={style.recipe}>
            <h1 className={style.title}>{title}</h1>
            <img className={style.image} src={image} alt=''/>
            <h5 className={style.content} >
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            </h5>
            <button className={style.info} onClick={switchMode}>Show More</button>
            {showMore &&
            <div>
            <p><strong>Calories - </strong> <em>{(Math.round(cal * 100) / 100).toFixed(2)}</em> </p>
            {cuisineType ? <p><strong>Cusine Type - </strong> <em>{cuisineType.map(cuisine => (cuisine))}</em></p> : null}
            {dishType ? <p><strong>Dish Type - </strong> <em>{dishType.map(dish => (dish))}</em></p> : null}
            {dietLabels.length > 0 ? <p><strong>Diet Labels - </strong> <em>{dietLabels.map(label => (label))}</em></p> : null}
            <p className={style.link}><a href={knowMore}><strong>Click me for more information!!</strong></a></p>
            </div>
            }
        </div>
    )
}

export default Recipe
