import { ReviewsWrapper } from './Reviews.styles'
import Navbar from '../../Layouts/Navbar/Navbar'
import ReviewItem from '../../components/home/Reviews/ReviewItem/ReviewItem'
import ReviewModal from '../../Layouts/modal/ReviewModal/ReviewModal'
import { ChangeEvent, useEffect, useState } from 'react'
import { getAllReviewsApi } from '../../utils/api'
import { ReviewType } from '../../utils/Types'
import ReviewSkeletion from '../../Layouts/skeleton/Reviews/ReviewSkeletion'
import { useSelector } from 'react-redux'
import { State } from '../../redux/reducers'

const Reviews = () => {


  const [reviewsData,setReviewsData] =useState<ReviewType[] |null>(null)
  const {refresh} = useSelector((state:State)=>state.other)
  const [filteredData,setFilteredData] = useState<ReviewType[]>([])
  const [filterRating,setFilterRating]=useState("")

  const handleRatingChange=(e:ChangeEvent<HTMLSelectElement>)=>{


    setFilterRating(e.target.value)


  }

  useEffect(()=>{

    let allData = reviewsData;
    if(filterRating){
     allData =  allData?.filter(rw=>rw.rating <=parseInt(filterRating)) ?? [];
     if(allData)
     setFilteredData(allData)

    }
    setFilteredData(allData ?? [])


  },[filterRating ,reviewsData])


  

  useEffect(()=>{
    handleFetchReviews()
  },[refresh])


  const handleFetchReviews=async()=>{


      try {
        const {data,status} = await  getAllReviewsApi();  
        if(status===200){
          setReviewsData(data.message)
        }

      } catch (error) {
        
      }
  }
  

  return (
    <ReviewsWrapper  isLoading={!reviewsData} >

        <Navbar/>

        <div className='reviews_container'>

          <div className='review_header'>
            <div className="header_left">
    <img width="40" height="40" src="https://img.icons8.com/3d-fluency/94/rating.png" alt="rating"/>
      <h1>My reviews</h1>
            </div>
            <div className='header_right'>

              <div >

                <div className="reviewFilterItem">
                  {/* < htmlFor="">Filter by</ label> */}
                  <select onChange={handleRatingChange}  >
                    <option value="ratings" disabled selected>Ratings</option>
                    <option value="5">5 </option>
                    <option value="4">4</option>
                    <option value="3">3</option>
                    <option value="2">2</option>
                    <option value="1">1</option>

                  </select>

                </div>

              </div>

        <ReviewModal >

              <button className='reviewButton'>Add review</button>
        </ReviewModal>

            </div>

          </div>
    <div className="review_wrapper">

         {
       reviewsData  ? filteredData.map(review=><ReviewItem big={true} review={review}/> ):<ReviewSkeletion/>
         } 
          
    </div>

        </div>


    </ReviewsWrapper>
  )
}

export default Reviews