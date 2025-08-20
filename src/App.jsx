import { useState } from "react";
import data from "./../data.json";
import JobItem from "./components/jobItem";
import JobTagFilter from "./components/JobTagFilter";

function App() {
  // const [tags, setTags] = useState(["Frontend", "CSS", "JavaScript"]);
  const [tags, setTags] = useState([]);
  const [jobList, setJobList] = useState(() => data);

  const updateTags = function (newTag) {
    if (tags.includes(newTag)) return;

    setTags((tags) => [...tags, newTag]);
  };

  const removeTag = function (givenTag) {
    console.log(givenTag);
    setTags((tags) => tags.filter((tag) => tag !== givenTag));
  };

  const clearTags = function () {
    setTags([]);
  };

  return (
    <div className="px-6">
      {tags.length ? (
        <JobTagFilter tags={tags} removeTag={removeTag} clearTags={clearTags} />
      ) : (
        ""
      )}

      <div className="job-list w-full flex flex-col items-center sm:gap-7 gap-18 pt-15 sm:pt-0 sm:mt-10 mt-4">
        {jobList.map((job) => (
          <JobItem key={job.id} jobObj={job} tagUpdate={updateTags} />
        ))}
      </div>
    </div>
  );
}

export default App;
