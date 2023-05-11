import React, {useState} from 'react';
import { Container, CategoryArea, CategoryList } from './styled';
import CategoryItem from '../../components/CategoryItem';
import Header from '../../components/Header';
import { useEffect } from 'react';
import API from '../../API';

export default () => {

    const [headerSearch, setHeaderSearch]=useState('');
    const [categories, setCategories] = useState([]);

    const [activeCategory, setActiveCategory]=useState(0);

    useEffect(()=>{
        const getCategories = async()=>{
            const cat = await API.getCategories();

            if(cat.error !== '') {
                alert('ERRO! Tente mais tarde...')
            } else {
                setCategories(cat.result);
                console.log(categories);
            }
        };
        getCategories();
    }, []);

    useEffect(()=>{

    }, [activeCategory]);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
    return (
        <Container>
            <Header search={headerSearch} onSearch={setHeaderSearch}/>

            {categories?.length > 0 &&
                <CategoryArea>
                    Selecione uma categoria: ({activeCategory})
                    <CategoryList>
                        <CategoryItem 
                            data={{
                                id:0, 
                                title:'', 
                                image:'/assets/food-and-restaurant.png'
                            }}
                            activeCategory={activeCategory}
                            setActiveCategory={setActiveCategory}
                            title="Todas as categorias" 
                            image="/assets/food-and-restaurant.png" 
                        />
                        {categories.map((item, index)=>(
                            <CategoryItem key={index} data={item} activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>
                        ))}
                    </CategoryList>
                     
                </CategoryArea>
                
            }
        </Container>
    );
}