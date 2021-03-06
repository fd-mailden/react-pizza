import React from 'react'
import { Categories, SortPopup, PizzaBlock, PizzaLoadingBlock}  from '../components';
import {useSelector, useDispatch} from 'react-redux';
import { setCategory } from '../redux/actions/filters';
import { fetchPizzas  } from '../redux/actions/pizzas';

const categoryNames = ['Мясные','Вегетарианская','Гриль','Острые','Закрытые'];
const sortItems = [
  {name:'популярности', type:'popular'}, 
  {name:'цене', type: 'price'}, 
  {name: 'алфавиту', type: 'alphabet'}];

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({pizzas})=> pizzas.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);

  React.useEffect(()=>{
         dispatch(fetchPizzas());
      }, []);


      
  const onSetCategory = React.useCallback(
    (index) =>{
      dispatch(setCategory(index));
    }, []);

  

    return (
        <div className="container">
        <div className="content__top">
          <Categories 
            onClickItem={()=>onSetCategory} 
            items = {categoryNames}/>
          <SortPopup items = {sortItems}/>
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
{/* isLoaded */}
            { isLoaded && items.map(obj=><PizzaBlock key ={obj.id} isLooading={true} {...obj}/>)
            }
            {/* {
              Array(10).fill(0)
            } */}
            
        
        </div>
     </div>
    )
}

export default Home
