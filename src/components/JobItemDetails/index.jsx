import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header";

const JobsItemsDetails = ()=>{
  const {id:jobsItemId} = useParams();

  const [allValues,setValue] = useState({
    jobsItem :{}
  });


  useEffect(()=>{

    const fetchJobsItems = async()=>{

      const url = `https://apis.ccbp.in/jobs/${jobsItemId}`;
      const options = {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InByYW5lZXRoYSIsInJvbGUiOiJQUklNRV9VU0VSIiwiaWF0IjoxNjIzMDY1NTMyfQ.68FuDFraHW7GplQiXVUrnsU1goYgmwd0tXNk6-HxCok",
        },
      };

      const response = await fetch(url,options);
      const data = await response.json();
      console.log(data.job_details);
      console.log(data.similar_jobs);


    }
    fetchJobsItems();


  },[])

  return (
    <div className="job-details-page">
      <Header/>
      <div className="job-details-content-container">
      
      </div>
    </div>
  )
}



export default JobsItemsDetails;