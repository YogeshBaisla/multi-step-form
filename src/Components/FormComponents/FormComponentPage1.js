export function FormComponentPage1(){
    return(
    <>
    <form>
        <div>
        <label>Full Name :</label>
        <input type="text" placeholder="Name" required />
        </div>
        <div>
        <label>Email ID :</label>    
        <input type="email" placeholder="Email" required />
        </div>
        <div>
        <label>Phone Number :</label>
        <input type="number" placeholder="Phone Number" required/>
        </div>
    </form>
    </>);
}