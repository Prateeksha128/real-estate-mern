import "./ListPage.scss";
import { listData } from "../../lib/devdata";
import Filter from "../../components/filter/Filter";
import Card from "../../components/card/Card";
function ListPage() {
    const data = listData;
    console.log(data);
    
  return (
    <div className='listpage'>
      <div className='listContainer'>
        <div className='wrapper'>
          <Filter />
          {data.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
      </div>

      <div className='mapContainer'>map</div>
    </div>
  );
}

export default ListPage;
