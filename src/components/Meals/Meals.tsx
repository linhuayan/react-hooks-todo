import React from "react";
import classes from './Meals.module.css';
import Meal from "./Meal/Meal";
import { mealItemProps } from "../../types";


const Meals = (props: { mealsData: mealItemProps[] }) => {
    return (
        <div className={classes.Meals}>
            {props.mealsData.map(item => 
                <Meal meal={item}/>
            )}
        </div>
    )
};

export default Meals;
