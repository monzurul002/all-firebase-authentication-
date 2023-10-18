import room1 from "../../assets/room1.jpg"
import room2 from "../../assets/room2.jpg"
import room3 from "../../assets/room3.jpg"
const Home = () => {
    return (
        <div className="container text-white bg-black py-5 px-5" >
            <div className="text-center">
            <h1>Explore</h1>
            <h2>Rooms & Suites</h2>
            <p>Marino Royal Hotel offers Room and Suites, individually designed and well furnished. Although each one is unique international standard of comfort. All Rooms and Suites are air conditioning and offer the latest technology, including wireless broadband internet access</p>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-5">
  <div className="col">
    <div className="card h-100">
      <img src={room1} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <div className="card-footer text-center">
        <small className="text-body-secondary btn btn-warning fw-bold">Explore More</small>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src={room2} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Delux King</h5>
        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
      <div className="card-footer  text-center ">
        <small className="text-body-secondary btn btn-warning fw-bold text-light text-center">Premium Deluxe</small>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src={room3} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Delux Twin</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      </div>
      <div className="card-footer text-center ">
        <small className="text-body-secondary  btn btn-warning fw-bold">Explore More</small>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Home;