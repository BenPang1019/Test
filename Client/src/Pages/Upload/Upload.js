import React,{useState} from 'react'
import '../Upload/Upload.css'
import axios from "axios"
import moment from "moment";

export const Upload = () => {
    const [file, setFile] = useState(null);
    
    const [inputs, setInputs] = useState({
        productName: "",
        price: "",
        description: "",
        specs:"",
        category:"",
        image: "",
        date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
      });
    
    const imageUpload = async () => {
    try {
        const formData = new FormData();
        formData.append("file", file);
        const res = await axios.post("/imageUpload", formData);
        return res.data
    } catch (err) {
        console.log(err);
    }
    };

    const handleChange = (e) => {
        setFile(e.target.files[0])
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value}));  
      };

    const handleClick = async (e) => {
        e.preventDefault();
        const imgUrl = await imageUpload()
        try {
            const res = await axios.post("/routes/upload", inputs);
            console.log(res)
        } catch (err) {
            console.log(err)
        }
    }; 

  return (
    <div className='upload'>
        <h1>Upload New Product Here</h1>
        <form>
        <div className="Label">
            <label>Product Name</label><br/>
            <input
                name='productName'
                type="text"
                placeholder="Enter Product Name"
                required
                className="input"
                onChange={handleChange}
            />
        </div>

        <div className="Label">
            <label>Price</label><br/>
            <input
                name='price'
                type="number"
                placeholder="Enter Price"
                required
                className="input"
                onChange={handleChange}
            />
        </div>

        <div className="Label">
            <label>Description</label><br/>
            <input
                name='description'
                type="text"
                placeholder="Enter Description"
                required
                className="input"
                onChange={handleChange}
            />
        </div>

        <div className="Label">
            <label>Specs</label><br/>
            <textarea
                name='specs'
                type="text"
                placeholder="Enter Specs"
                required
                className="inputSpec"
                onChange={handleChange}
            />
        </div>

        <div className="Label">
            <label>Category</label><br/>
            <input
                name='category'
                type="text"
                placeholder="Enter Category"
                required
                className="input"
                onChange={handleChange}
            />
        </div>

        <div className="Label">
            <label>Image</label><br/>
            <input
                name='image'
                type="file"
                required
                className="input"
                onChange={handleChange}
            />
        </div>

        <button onClick={handleClick} className='button' type="submit">Upload</button>
        </form>

    </div>
  )
}
