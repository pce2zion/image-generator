import { useState } from "react";

const Forms = () => {
    const [formData, setFormData]= useState(
        {firstname: "",
         lastname: "",
         email: "",
         password: "",
         comments: "",
         isFriendly: true,
         employment: "",
         favColor: ""
    }
        )
        const handleClick= (event)=> {
            const {name, value, type,  checked} = event.target
            setFormData(prevForm=>({
                ...prevForm,
                [name] : type === "checkbox" ? checked : value
               
            }))
            console.log(event.target.value);
        }
        const handleSubmit = (event)=>{
            event.preventDefault()

            if (formData.password === formData.firstname ) {
                console.log("Successfully signed up")
            }else {
              return  console.log("passwords dont match");
            }

            if (formData.isFriendly) {
                return   console.log("thanks for signing up")
            } 
          
        }
    return (  
        <div className="forms">
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                placeholder="Frist name"
                onChange={handleClick}
                name="firstname"
                value={formData.firstname}
                 /> <br /> <br />

                 <input 
                type="text"
                placeholder="Last name"
                onChange={handleClick}
                name="lastname"
                value={formData.lastname}
                 /> <br /> <br />

                 <input 
                type="email"
                placeholder="Email"
                onChange={handleClick}
                name="email"
                value={formData.email}
                 /> <br /> <br />
                 <input
                  type="password" 
                  placeholder="password"
                  name="password"
                  value={formData.password}
                  onChange= {handleClick}
                 /> <br /> <br />

                 <textarea 
                 name="comments" 
                 placeholder="comments"
                 id="" cols="30" rows="10"
                 value={formData.comments}
                 onChange = {handleClick}
                 /> <br /> <br />
                
                <input
                 type="checkbox" 
                 id="isFriendly"
                 name="isFriendly"
                 checked= {formData.isFriendly}
                 onChange = {handleClick}
                  />
                <label htmlFor="isFriendly">Are you friendly?</label> <br /> <br />
                 <fieldset>
                     <legend>Current employment status</legend>

                     <input 
                     type="radio"
                     id="unemployed"
                     name="employment"
                     value= "unemployed"
                     onChange = {handleClick}
                     checked= {formData.employment ==="unemployed"}
                     />
                     <label htmlFor="unemployed">Unemployed</label> <br />

                     <input 
                     type="radio"
                     id="part-time"
                     name="employment"
                     value= "part-time"
                     onChange = {handleClick}
                     checked= {formData.employment ==="part-time"}
                     />
                     <label htmlFor="part-time">Part-time</label> <br />
                     <input 
                     type="radio"
                     id="employed"
                     name="employment"
                     value= "employed"
                     onChange = {handleClick}
                     checked= {formData.employment === "employed"}
                     />
                     <label htmlFor="employed">Employed</label> <br />
                 </fieldset> <br />

                    <label htmlFor="favColor">What is your favorite colour</label>
                 <select 
                 name="favColor"
                 id="favColor"
                 value= {formData.favColor}
                 onChange={handleClick}
                 >
                      <option value="">--Choose--</option>
                     <option value="brown">Brown</option>
                     <option value="blue">Blue</option>
                     <option value="Violet">Violet</option>
                     <option value="purple">purple</option>
                     <option value="indigo">indigo</option>
                 </select>
                 <button>Submit</button>
            </form>
        </div>
    );
}
 
export default Forms;