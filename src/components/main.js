 import Real from "../images/second.jpg"
import Meme from "../images/logo192.png"
import { useEffect, useState } from "react"
import Memes from "./memesdata"
// import Bolls from "./box"
// import Forms from "../odaz/form"
const Main = (props) => {
    // const handleClick = ()=>{
    //     console.log("i was clicked");
    // }
    // const handleOver = ()=> {
    //     console.log("i was clicked")
        
    // }

    // const [square, setSquare] = useState(Boxes);
    
    // const toggle = (id)=>{
    //    setSquare(prevSquare=> {
    //      return  prevSquare.map(square=> {
    //          return   square.id === id ? { ...square,  on: !square.on}:square
    //         })
    //     })
    //      } 
    //         const arrangeElements = square.map(square=> {
    //     return <Bolls deClick=       {toggle} 
    //                   key= {square.id} 
    //                   id= {square.id}
    //                   on={square.on} />
    //         });

           

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: Real
    })

    const handleChange = (event)=>{
        const {name, value} = event.target
        setMeme(prevMeme=> ({
            ...prevMeme,
            [name] :value
        }) )
    }   
    const [allMemeImages, setAllMemeImages] = useState([])
    useEffect(()=> {
        const getAllMeme = async ()=> {
            const request = await fetch ("https://api.imgflip.com/get_memes");
            const response = await request.json()
    console.log(response);
            setAllMemeImages(response.data.memes)
        }
        getAllMeme()
    
    }, [])

      const say = (name)=> {
        console.log();
      }
    
       
    const getMemeImage =()=>{
        const memeGen = Math.floor(Math.random() * allMemeImages.length )
        console.log(memeGen);
        const later = allMemeImages[memeGen].url
        console.log(allMemeImages);

        setMeme(prevMeme => ({
             ...prevMeme,
            randomImage: later
        }));
        console.log(memeGen);
    }

    const [book, setBook] = useState("")
    const [filtered, setFiltered]=  useState([])
    const[me, setMe] = useState(false)
    
    const handleChangeee = (event)=>{
        setBook(event.target.value)
       
    }
    
    const memers = Memes.data.memes

useEffect(()=>{
const filterer = memers.filter(memee =>{
   return memee.name.startsWith(book)  
})
setFiltered(filterer)
setMe(prevMe => !prevMe)
}, [book])







    return (
        <div className= {props.darkmode ? "darkenss" : "main"}>
            <section className="forms">
                <div className="foam">
                    <input 
                    className="text" 
                    type="text"
                    placeholder="shut up"
                    name="topText" 
                    value={meme.topText}
                    onChange = {handleChange}
                      />

                    <input 
                    className="text" 
                    type="text" 
                    placeholder="and take my money" 
                    name="bottomText"
                    value={meme.bottomText}
                    onChange = {handleChange}
                    
                    /> 
                    <br /><br /><br />
                    <button onClick={getMemeImage} className="btn">Get a new meme image <img src={Meme} alt="a cool view" /></button>
                </div>

                <section className="less">
                    <img src={meme.randomImage}  alt="laughs" />
                    <h2 className="meme-top">{meme.topText}</h2>
                    <h2 className="meme-bottom">{meme.bottomText}</h2>
                </section>
            </section>

          
          {/* <section>
              {arrangeElements}
          </section> */}

            <br />
            {/* <Forms/> */}

                <input 
                    className="text" 
                    type="text"
                    placeholder="type something" 
                    value={book}
                    onChange = {handleChangeee}
                    
                />

                
                
                
s
                {me  ?
                (
                    ( <div className="list">
                    {filtered.map(memer=>{
                            return <p key = {memer.id}>{ memer.name}</p>
                        })}
                    </div>
                    )
                ) 
                :

                ""
                 
                }
                    
                
               

               
                  
               
        </div>


      );


      
}
 
export default Main;