import { WorkFilterSelectWrapper, WorkWrapper } from "./Works.styles";
import Navbar from "../../Layouts/Navbar/Navbar";
import ProjectItem from "../../components/works/ProjectItem/ProjectItem";
import { ChangeEvent, useEffect, useState } from "react";
import { WorkType } from "../../utils/Types";
import { getAllProjectApi } from "../../utils/api";
import WorkSkeleton from "../../Layouts/skeleton/WorkSkeleton/WorkSkeleton";

const Works = () => {
  const [worksArr, setWorkArr] = useState<WorkType[] | null>(null);
  const [filteredWork, setFilteredWork] = useState<WorkType[]>([]);

  const [filterPayload, setFilterPayload] = useState({
    platform: "All",
    rating: "All",
    status: "All",
  });

  useEffect(() => {
    fetchAllWorks();
  }, []);

  useEffect(() => {
    const { status, platform, rating } = filterPayload;

    if (!worksArr) return;
    let data: WorkType[] = worksArr;

    if (platform !== "All") {
      let filtered = data?.filter(
        (wrk) => wrk.platform.toLowerCase() === platform.toLowerCase()
      );

      if (filtered) {
        data = filtered;
      }
    }

    if (status !== "All") {
      let filtered = data?.filter(
        (wrk) => wrk.status.toLowerCase() === status.toLowerCase()
      );
      console.log("status changed", filtered);
      if (filtered) {
        data = filtered;
      }
    }

    if (rating !== "All") {
      let filtered = data?.filter((wrk) => wrk.rating >= parseInt(rating));
      console.log("status changed", filtered);
      if (filtered) {
        data = filtered;
      }
    }
    setFilteredWork(data);
  }, [filterPayload, worksArr]);

  const fetchAllWorks = async () => {
    try {
      const { data, status } = await getAllProjectApi();
      if (status === 200) {
        setWorkArr(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleFilterSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFilterPayload((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <WorkWrapper isLoading={!worksArr}>
      <Navbar />
      <div className="work_container">
        <div className="work_header">
          <div className="filter_item">
            <label htmlFor="platform">Platform</label>
            <WorkFilterSelectWrapper
              isSelected={filterPayload.platform !== "All"}
              name="platform"
              id=""
              onChange={handleFilterSelectChange}
            >
              <option value="All">All</option>
              <option value="Web application">Web application</option>
              <option value="Mobile application">Mobile application</option>
            </WorkFilterSelectWrapper>
          </div>
          <div className="filter_item">
            <label htmlFor="platform">Status</label>
            <WorkFilterSelectWrapper
              isSelected={filterPayload.status !== "All"}
              name="status"
              id=""
              onChange={handleFilterSelectChange}
            >
              <option value="All">All</option>
              <option value="Completed">Completed</option>
              <option value="Progress">Progress</option>
            </WorkFilterSelectWrapper>
          </div>
          <div className="filter_item">
            <label htmlFor="platform">Ratings</label>
            <WorkFilterSelectWrapper
              isSelected={filterPayload.rating !== "All"}
              name="rating"
              id=""
              onChange={handleFilterSelectChange}
            >
              <option value="All">All</option>
              <option value="5">5</option>
              <option value="4">4</option>
              <option value="3">3</option>
              <option value="2">2</option>
              <option value="1">1</option>
            </WorkFilterSelectWrapper>
          </div>
        </div>
        <div className="workWrapper">
          {worksArr ? (
            filteredWork.map((work) => (
              <ProjectItem big={true} key={work._id} work={work} />
            ))
          ) : (
            <WorkSkeleton />
          )}
        </div>
      </div>
    </WorkWrapper>
  );
};

export default Works;
