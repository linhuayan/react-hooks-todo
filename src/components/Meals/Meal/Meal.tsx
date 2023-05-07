import React from 'react';
import classes from './Meal.module.css';
import { mealItemProps } from '../../../types';


interface mealsProps {
    meal: mealItemProps;
    noDesc?: boolean;
}

const Meal = ({ meal, noDesc }: mealsProps) => {
    return (
        <div className={classes.Meal}>
            <div className={classes.ImgBox}>
                <img src={meal.img} />
            </div>
            <div className={classes.DescBox}>
                <h2 className={classes.Title}>{meal.title}</h2>
                {noDesc ? null : <p className={classes.Desc}>{meal.desc}</p>}
                <div className={classes.PriceWrap}>
                    <span className={classes.Price}>{meal.price}</span>
                    {/* <Counter
                        meal={meal}
                    /> */}
                </div>
            </div>
        </div>
    )
}

export default Meal;
