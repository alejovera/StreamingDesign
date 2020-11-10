import React from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import '../assets/styles/App.scss';


const Home = ( {myList, trends, originals, looking}) => {

  return (
    <React.Fragment>
      <Search isHome/>
      
        { 
          Object.keys(looking).length > 0 && 
              (
                <Categories title="Resultados de la busqueda...">
                    <Carousel>
                        {looking.map(item =>
                            <CarouselItem 
                            key={item.id} 
                            {...item}
                            />
                        )}
                    </Carousel>
                </Categories>
              )                        
        }
        
      {myList.length > 0 &&

        <Categories title="Mi lista">
          <Carousel>
            {myList.map(item =>
                <CarouselItem 
                  key={item.id}
                  {...item}
                  isList
                />            
            )}
          </Carousel>
        </Categories>

      }

      <Categories title="Tendencias">
        <Carousel>
          {trends.map(item =>
              <CarouselItem key={item.id} {...item} />            
          )}
        </Carousel>
      </Categories>

      <Categories title="Originales de PlatziVideo">
        <Carousel>
          {originals.map(item =>
            <CarouselItem key={item.id} {...item} />
          )}
        </Carousel>
      </Categories>

    </React.Fragment>
  );
}

const mapStateToProps = state => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
    looking: state.looking,
  };
};

export default connect(mapStateToProps, null)(Home);