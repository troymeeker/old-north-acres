import {FaStar} from 'react-icons/fa'
function StarTest({updatedStar, setUpdatedStar}){
    const stars = [...Array(5)].map((star, i) => {

        const updatedValue = i + 1;

 return(
 <label key={i}>
         <input 
              type="radio" 
              name="rating" 
              value={updatedValue} 
              onClick = {(e) => { 
                  setUpdatedStar(e.target.value)
                  console.log(e.target.value);
              //  !! would like this change to show in edit stars, but not in above review stars
              }}
           
          />

         <FaStar 
           size={30}
           color={updatedValue <= ( updatedStar ) ? "#ffc107" : "#777"}
          
         
          />
 </label>)
})
    return (
        <div>
    {/* {   starRating}  */}
        {stars}
        </div>
    )
}

export default StarTest;