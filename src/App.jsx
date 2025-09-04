import { useMemo, useState } from "react";
import data from "./../data.json";
import JobItem from "./components/jobItem";
import JobTagFilter from "./components/JobTagFilter";

function App() {
  const [tags, setTags] = useState([]);

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

  const filteredJobList = useMemo(() => {
    return data.filter((job) => {
      // extract job tags from each job
      const jobTags = [job.role, job.level, ...job.tools, ...job.languages];

      // check for all the tags to be included in jobTags array
      return tags.every((tag) => jobTags.includes(tag));
    });
  }, [data, tags]);

  return (
    <>
      <div className="top-background w-full h-40 sm:h-50 bg-[url(./images/bg-header-mobile.svg)] bg-cover bg-center sm:bg-[url(./images/bg-header-desktop.svg)] bg-(--Green-400)"></div>
      <div className="px-6">
        {tags.length ? (
          <JobTagFilter
            tags={tags}
            removeTag={removeTag}
            clearTags={clearTags}
          />
        ) : (
          ""
        )}

        <div className="job-list w-full flex flex-col items-center sm:gap-7 gap-18 pt-15 sm:pt-0 sm:mt-10 mt-4">
          {filteredJobList.map((job) => (
            <JobItem key={job.id} jobObj={job} tagUpdate={updateTags} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
