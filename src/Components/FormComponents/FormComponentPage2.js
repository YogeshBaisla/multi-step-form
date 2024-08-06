export function FormComponentPage2(){
    return(
    <>
    <form>
        <div>
        <label>Address Line 1 :</label>
        <input type="text" placeholder="Address Line 1" required />
        </div>
        <div>
        <label>Address Line 2 :</label>
        <input type="text" placeholder="Address Line 2" required />
        </div>
        <div>
        <label>City :</label>
        <input type="text" placeholder="City" required />
        </div>
        <div>
        <label>State :</label>
        <input type="text" placeholder="State" required />
        </div>
        <div>
        <label>Zip Code :</label>
        <input type="number" placeholder="Zip Code" required />
        </div>
    </form>
    </>);
}