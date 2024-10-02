import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Book(){
   return(
    <>
     <div className="book" id="bookings">
      <h2>Custom Trips</h2>

      <section className="search-section mt-4">
    <div className="containers">
      <form>
        <div className="form-row">
          <div className=" in col-md-3 mb-3">
            <label for="destination">Where to?</label>
            <input type="text" className="form-control" id="destination" placeholder="Enter destination"/>
          </div>
          <div className="in col-md-3 mb-3">
            <label for="dates">Date of Arrival</label>
            <input type="date" className="form-control" id="dates" placeholder="Select dates"/>
          </div>
          <div className="in col-md-3 mb-3">
            <label for="travelers">Date of Return</label>
            <input type="Date" className="form-control" id="travelers" placeholder="Number of travelers"/>
          </div>
        </div>
        <div className="form-row">
          <div className="in col-md-3 mb-3">
            <label for="travelers">City</label>
            <input type="text" className="form-control" id="travelers" />
          </div>
          <div className="in col-md-3 mb-3">
            <label for="travelers">Email</label>
            <input type="email" className="form-control" id="mail" />
          </div>
          <div className="in col-md-3 mb-3">
              <label for="travelers">Number of People</label>
              <select  style={{ backgroundColor: "white", border: "1px solid #ccc", width:"300px" }}>
                <option value="0"></option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">More Than 5</option>
              </select>
          </div>
        </div>
        <div className="formexe">
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="addFlight" value="option1"/>
            <label className="form-check-label" for="addFlight">Add a flight</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="addCar" value="option2"/>
            <label className="form-check-label" for="addCar">Add a car</label>
          </div>
        </div>
        <br />
        
        <div className="formexe">
              <button className="btn btn-primary" type="submit">Search</button>
          </div>
      </form>
    </div>
  </section>
     </div>

    </>
   ) 
}