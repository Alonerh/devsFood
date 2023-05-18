import React, {useState} from 'react';
import { 
    Container, 
    CategoryArea, 
    CategoryList, 
    ProductArea, 
    ProductList, 
    ProductPaginationArea,
    ProductPaginationItem
} from './styled';

import ProductItem from '../../components/ProductItem';
import CategoryItem from '../../components/CategoryItem';
import Header from '../../components/Header';
import Modal from '../../components/Modal';

import { useEffect } from 'react';
import API from '../../API';
import ModalProduct from '../../components/ModalProduct';


let searchTimer = null;


export default () => {

    const [headerSearch, setHeaderSearch]=useState('');
    const [categories, setCategories] = useState([]);
    const [products, setProducts]=useState([]);
    const [totalPages, setTotalPages]=useState(0);
    const [modalStatus, setModalStatus]=useState(false);
    const[modalData, setModalData]=useState({});

    const [activeCategory, setActiveCategory]=useState(0);
    const[activePage, setActivePage]=useState(1);
    const[activeSearch, setActiveSearch]=useState('');


    const getProducts = async()=>{
        const prods = await API.getProducts(activeCategory, activePage, activeSearch);
        if(prods.error === '') {
            setProducts(prods.result.data);
            setTotalPages(prods.result.pages);
            setActivePage(prods.result.page);
        }
    }
    
    const handleProductClick = (data)=>{
        setModalData(data);
        setModalStatus(true);
    };

    useEffect(()=>{
        clearTimeout(searchTimer);
        searchTimer = setTimeout(()=>{
            setActiveSearch(headerSearch);
        }, 2000);
    }, [headerSearch])

    useEffect(()=>{
        const getCategories = async()=>{
            const cat = await API.getCategories();
            if(cat.error !== '') {
                alert('ERRO! Tente mais tarde...')
            } else {
                setCategories(cat.result);
            }
        };
        getCategories();
    }, []);

    useEffect(()=>{
        getProducts([]);
        getProducts();
    }, [activeCategory, activePage, activeSearch]);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
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
                                image:'/assets/food-and-restaurant.png',
                                name: 'Tudo'
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


            {products?.length > 0 &&     
                <ProductArea>
                    <ProductList>
                            {products.map((item, index)=>(
                                <ProductItem 
                                    key={index} 
                                    data={item}
                                    onClick={handleProductClick}
                                />
                            ))}
                    </ProductList>
                </ProductArea>
            }

            {totalPages > 0 &&
                <ProductPaginationArea>
                    {Array(totalPages).fill(0).map((item, index)=>(
                        <ProductPaginationItem 
                            key={index} 
                            active={activePage}
                            current={index + 1}
                            onClick={()=>setActivePage(index + 1)}
                        >
                            {index + 1}
                        </ProductPaginationItem>
                    ))}

                </ProductPaginationArea>
            }

            <Modal status={modalStatus} setStatus={setModalStatus}>
                <ModalProduct data={modalData} setStatus={setModalStatus}/>
            </Modal>

        </Container>
    );
}